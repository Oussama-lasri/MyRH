package ma.youcode.myrh.services.implementations;

import ma.youcode.myrh.dtos.RecruiterDTO;
import ma.youcode.myrh.dtos.ResponseMessage;
import ma.youcode.myrh.models.Recruiter;
import ma.youcode.myrh.repositories.IRecruiterRepository;
import ma.youcode.myrh.services.FilesStorageService;
import ma.youcode.myrh.services.IRecruiterService;
import ma.youcode.myrh.utils.EmailService;
import ma.youcode.myrh.utils.ValidationCodeGenerator;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.swing.text.html.Option;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.Optional;

@Service
public class RecruiterService implements IRecruiterService {

    @Autowired
    FilesStorageService storageService;

    @Autowired
    IRecruiterRepository recruiterRepository;
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private EmailService emailService;
    private static final int VALIDATION_CODE_EXPIRATION_MINUTES = 3;

    @Override
    public RecruiterDTO save(RecruiterDTO recruiterDTO) {
        Recruiter recruiter = recruiterRepository.findByEmail(recruiterDTO.getEmail());
        if (recruiter != null) {
            System.out.println("this recruiter already exist(duplicated email)");
            return null;
        }

        recruiter = modelMapper.map(recruiterDTO, Recruiter.class);

        String code = ValidationCodeGenerator.generateValidationCode();
        recruiter.setCodeValidation(code);

        sendValidationCodeByEmail(recruiter.getEmail(), code);

        recruiter.setPassword(passwordEncoder.encode(recruiter.getPassword()));

        MultipartFile imageFile = recruiterDTO.getImage();
        try {
            storageService.save(imageFile);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }

        recruiter.setImage(imageFile.getOriginalFilename());
        Recruiter savedRecruiter = recruiterRepository.saveAndFlush(recruiter);
        recruiterDTO = modelMapper.map(savedRecruiter, RecruiterDTO.class);

        recruiterDTO.setImageUrl(recruiter.getImage());

//        recruiterDTO = modelMapper.map(recruiter, RecruiterDTO.class);
        return recruiterDTO;
    }

    @Override
    public RecruiterDTO findByEmail(String email) {
        Recruiter recruiter = recruiterRepository.findByEmail(email);
        return modelMapper.map(recruiter, RecruiterDTO.class);
    }

    @Override
    public Page<RecruiterDTO> findAll(Pageable pageable) {
        Page<Recruiter> recruiters = recruiterRepository.findAll(pageable);
        return recruiters.map(recruiter -> modelMapper.map(recruiter, RecruiterDTO.class));
    }

    private void sendValidationCodeByEmail(String email, String code) {
        emailService.sendSimpleMessage(email, "Recruiter validation code", code);
    }

    public boolean validateAccount(long recruiterId, String code) {
        Optional<Recruiter> optionalRecruiter = recruiterRepository.findById(recruiterId);

        if (optionalRecruiter.isPresent()) {
            Recruiter recruiter = optionalRecruiter.get();

            // Check if the validation code is still valid
            LocalDateTime expirationTime = recruiter.getCodeValidationTimestamp().plusMinutes(VALIDATION_CODE_EXPIRATION_MINUTES);
            if (LocalDateTime.now().isBefore(expirationTime) && code.equals(recruiter.getCodeValidation())) {
                // Mark the account as validated
                recruiter.setIsValid(true);
                recruiterRepository.save(recruiter);

                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public String resendValidationCode(long recruiterId) {
        Optional<Recruiter> optionalRecruiter = recruiterRepository.findById(recruiterId);

        if (optionalRecruiter.isPresent()) {
            Recruiter recruiter = optionalRecruiter.get();

            // Check if the previous validation code has expired
            LocalDateTime expirationTime = recruiter.getCodeValidationTimestamp().plusMinutes(VALIDATION_CODE_EXPIRATION_MINUTES);

            if (LocalDateTime.now().isAfter(expirationTime)) {
                // Generate a new validation code
                String newCodeValidation = ValidationCodeGenerator.generateValidationCode();

                // Send the new validation code by email/SMS
                sendValidationCodeByEmail(recruiter.getEmail(), newCodeValidation);

                // Save the new validation code and timestamp in the database
                recruiter.setCodeValidation(newCodeValidation);
                recruiter.setCodeValidationTimestamp(LocalDateTime.now());
                recruiterRepository.save(recruiter);

                return "Nouveau code de validation envoyé avec succès.";
            } else {
                return "Impossible de renvoyer le code de validation avant l'expiration du code actuel.";
            }
        } else {
            return "Aucun utilisateur trouvé avec l'adresse e-mail fournie.";
        }
    }


}
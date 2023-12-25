package ma.youcode.myrh.services.implementations;

import ma.youcode.myrh.dtos.RecruiterDTO;
import ma.youcode.myrh.models.Recruiter;
import ma.youcode.myrh.repositories.IRecruiterRepository;
import ma.youcode.myrh.services.IRecruiterService;
import ma.youcode.myrh.utils.EmailService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class RecruiterService implements IRecruiterService {

    @Autowired
    IRecruiterRepository recruiterRepository;
    @Autowired
    ModelMapper modelMapper;

    @Autowired
    private EmailService emailService;
    @Override
    public RecruiterDTO save(RecruiterDTO recruiterDTO) {
        emailService.sendSimpleMessage(recruiterDTO.getEmail(), "email subject", "email text");

        Recruiter recruiter = recruiterRepository.save(modelMapper.map(recruiterDTO, Recruiter.class));
        return modelMapper.map(recruiter, RecruiterDTO.class);
    }
}

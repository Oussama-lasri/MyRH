package ma.youcode.myrh.services.implementations;

import ma.youcode.myrh.dtos.JobOfferDTO;
import ma.youcode.myrh.dtos.ResumeDTO;
import ma.youcode.myrh.dtos.RecruiterDTO;
import ma.youcode.myrh.models.JobOffer;
import ma.youcode.myrh.models.Resume;
import ma.youcode.myrh.models.Recruiter;
import ma.youcode.myrh.models.Status;
import ma.youcode.myrh.repositories.IJobOfferRepository;
import ma.youcode.myrh.repositories.IResumeRepository;
import ma.youcode.myrh.services.FilesStorageService;
import ma.youcode.myrh.services.IResumeService;
import ma.youcode.myrh.services.IResumeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ResumeService implements IResumeService {
    @Autowired
    IResumeRepository resumeRepository;
    @Autowired
    IJobOfferRepository jobOfferRepository;
    @Autowired
    ModelMapper modelMapper;

    @Autowired
    FilesStorageService storageService;

    @Override
    public ResumeDTO save(ResumeDTO resumeDTO, long jobOfferId) {

        Optional<JobOffer> jobOffer = jobOfferRepository.findById(jobOfferId);
        if (jobOffer.isEmpty()){
            return null;
        }
        Resume resume = modelMapper.map(resumeDTO, Resume.class);
        resume.setJobOffer(jobOffer.get());

        MultipartFile resumeFile = resumeDTO.getResume();
        try {
            storageService.save(resumeFile);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
        resume.setResume(resumeFile.getOriginalFilename());
        resume = resumeRepository.save(resume);

        return modelMapper.map(resume, ResumeDTO.class);
    }

    @Override
    public List<ResumeDTO> findByJobOffer(long id) {
        JobOffer jobOffer = jobOfferRepository.findById(id).get();

        List<Resume> resumes = resumeRepository.findByJobOffer(jobOffer);

        return resumes.stream()
                .map(resume -> modelMapper.map(resume, ResumeDTO.class))
                .collect(Collectors.toList());
    }
    @Override
    public List<ResumeDTO> findAll() {
        List<Resume> resumes = resumeRepository.findAll();
//        List<Resume> resumes = resumeRepository.findAllByJobOffer_Recruiter_Id(1L);
        return resumes.stream()
                .map(resume ->{

                        ResumeDTO resumeDTO = modelMapper.map(resume, ResumeDTO.class);
                        resumeDTO.setResumeUrl(resume.getResume());
                    System.out.println(resume.getResume());
                        return resumeDTO;
                        }).collect(Collectors.toList());
    }

    @Override
    public List<ResumeDTO> findAllByRecruiterId(long id) {
        List<Resume> resumes = resumeRepository.findAllByJobOffer_Recruiter_Id(id);
        return resumes.stream()
                .map(resume -> {

                    ResumeDTO resumeDTO = modelMapper.map(resume, ResumeDTO.class);
                    resumeDTO.setResumeUrl(resume.getResume());
                    System.out.println(resume.getResume());
                    return resumeDTO;
                }).collect(Collectors.toList());
    }

}
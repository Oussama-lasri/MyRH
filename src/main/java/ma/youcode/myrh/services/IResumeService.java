package ma.youcode.myrh.services;

import ma.youcode.myrh.dtos.JobOfferDTO;
import ma.youcode.myrh.dtos.RecruiterDTO;
import ma.youcode.myrh.dtos.ResumeDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IResumeService {
     ResumeDTO save(ResumeDTO jobOfferDTO, long jobfferId);
     List<ResumeDTO> findByJobOffer(JobOfferDTO jobOfferDTO);
     List<ResumeDTO> findAll();
}

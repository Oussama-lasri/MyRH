package ma.youcode.myrh.services;

import ma.youcode.myrh.dtos.JobOfferDTO;
import ma.youcode.myrh.dtos.RecruiterDTO;
import ma.youcode.myrh.dtos.ResumeDTO;
import ma.youcode.myrh.models.Status;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IResumeService {
     ResumeDTO save(ResumeDTO jobOfferDTO, long jobfferId);
     List<ResumeDTO> findByJobOffer(long  id);
     List<ResumeDTO> findAll();
     List<ResumeDTO> findAllByRecruiterId(long id);
     List<ResumeDTO> findAllByUserId(long id);
}

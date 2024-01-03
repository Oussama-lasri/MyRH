package ma.youcode.myrh.services;

import ma.youcode.myrh.dtos.JobOfferDTO;
import ma.youcode.myrh.dtos.JobOfferDTO;
import ma.youcode.myrh.dtos.RecruiterDTO;
import ma.youcode.myrh.models.Recruiter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IJobOfferService {
     JobOfferDTO save(JobOfferDTO jobOfferDTO);
     List<JobOfferDTO> findByRecruiter(RecruiterDTO recruiterDTO);

     List<JobOfferDTO> findByTitle(String title);
     Page<JobOfferDTO> findAllPageable(Pageable pageable);
     List<JobOfferDTO> findAll();
}

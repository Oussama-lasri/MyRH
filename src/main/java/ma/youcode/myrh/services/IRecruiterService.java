package ma.youcode.myrh.services;

import ma.youcode.myrh.dtos.RecruiterDTO;
import ma.youcode.myrh.models.Recruiter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IRecruiterService {
     RecruiterDTO save(RecruiterDTO recruiterDTO);
     Page<RecruiterDTO> findAll(Pageable pageable);
}

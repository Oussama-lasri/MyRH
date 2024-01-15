package ma.youcode.myrh.services;

import ma.youcode.myrh.dao.response.JwtAuthenticationResponse;
import ma.youcode.myrh.dtos.RecruiterDTO;
import ma.youcode.myrh.models.Recruiter;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IRecruiterService {
     JwtAuthenticationResponse save(RecruiterDTO recruiterDTO);

     RecruiterDTO findByEmail(String email);
     Page<RecruiterDTO> findAll(Pageable pageable);
}

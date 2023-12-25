package ma.youcode.myrh.services.implementations;

import ma.youcode.myrh.dtos.RecruiterDTO;
import ma.youcode.myrh.models.Recruiter;
import ma.youcode.myrh.repositories.IRecruiterRepository;
import ma.youcode.myrh.services.IRecruiterService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecruiterService implements IRecruiterService {

    @Autowired
    IRecruiterRepository recruiterRepository;
    @Autowired
    ModelMapper modelMapper;
    @Override
    public RecruiterDTO save(RecruiterDTO recruiterDTO) {
        Recruiter recruiter = recruiterRepository.save(modelMapper.map(recruiterDTO, Recruiter.class));
        return modelMapper.map(recruiter, RecruiterDTO.class);
    }
}

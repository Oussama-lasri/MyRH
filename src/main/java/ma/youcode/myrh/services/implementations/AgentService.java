package ma.youcode.myrh.services.implementations;

import ma.youcode.myrh.dtos.AgentDTO;
import ma.youcode.myrh.models.Agent;
import ma.youcode.myrh.repositories.IAgentRepository;
import ma.youcode.myrh.services.FilesStorageService;
import ma.youcode.myrh.services.IAgentService;
import ma.youcode.myrh.utils.EmailService;
import ma.youcode.myrh.utils.ValidationCodeGenerator;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class AgentService implements IAgentService {


    @Autowired
    IAgentRepository agentRepository;
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public AgentDTO save(AgentDTO agentDTO) {
        Agent agent = agentRepository.findByEmail(agentDTO.getEmail());
        if (agent != null) {
            System.out.println("this agent already exist(duplicated email)");
            return null;
        }

        agent = modelMapper.map(agentDTO, Agent.class);
        agent.setPassword(passwordEncoder.encode(agent.getPassword()));
        agent = agentRepository.save(agent);

        return modelMapper.map(agent, AgentDTO.class);
    }

    @Override
    public AgentDTO findByEmail(String email) {
        Agent agent = agentRepository.findByEmail(email);
        return modelMapper.map(agent, AgentDTO.class);
    }

    @Override
    public Page<AgentDTO> findAll(Pageable pageable) {
        Page<Agent> agents = agentRepository.findAll(pageable);
        return agents.map(agent -> modelMapper.map(agent, AgentDTO.class));
    }


}
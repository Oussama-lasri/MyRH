package ma.youcode.myrh.services;

import ma.youcode.myrh.dtos.AgentDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IAgentService {
     AgentDTO save(AgentDTO AgentDTO);
     AgentDTO findByEmail(String email);
     Page<AgentDTO> findAll(Pageable pageable);
}

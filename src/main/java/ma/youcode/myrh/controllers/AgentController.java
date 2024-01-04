package ma.youcode.myrh.controllers;


import ma.youcode.myrh.dtos.AgentDTO;
import ma.youcode.myrh.services.implementations.AgentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/v1/agents")
@RestController
public class AgentController {

    @Autowired
    AgentService agentService;
    @PostMapping
    public ResponseEntity<AgentDTO> create(@RequestBody AgentDTO agentToSave){
        AgentDTO agentDTO = agentService.save(agentToSave);
        return ResponseEntity.ok(agentDTO);
    }

    @GetMapping()
    public ResponseEntity<Page<AgentDTO>> getAll(Pageable pageable){
        Page<AgentDTO> agents = agentService.findAll(pageable);
        return ResponseEntity.ok(agents);
    }
}

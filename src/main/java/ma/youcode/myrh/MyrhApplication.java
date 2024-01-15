package ma.youcode.myrh;

import jakarta.annotation.Resource;
import ma.youcode.myrh.dtos.AgentDTO;
import ma.youcode.myrh.dtos.RecruiterDTO;
import ma.youcode.myrh.models.Recruiter;
import ma.youcode.myrh.repositories.UserRepository;
import ma.youcode.myrh.services.FilesStorageService;
import ma.youcode.myrh.services.UserService;
import ma.youcode.myrh.services.implementations.AgentService;
import ma.youcode.myrh.services.implementations.RecruiterService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class MyrhApplication implements CommandLineRunner {
    @Resource
    FilesStorageService storageService;

    public static void main(String[] args) {
        SpringApplication.run(MyrhApplication.class, args);
    }

    @Override
    public void run(String... arg) throws Exception {
        storageService.deleteAll();
        storageService.init();
    }
//	@Bean
//	CommandLineRunner start(RecruiterService recruiterService, UserRepository userRepository, PasswordEncoder passwordEncoder){
//		return args -> {
////			AgentDTO agentDTO = new AgentDTO();
////			agentDTO.setName("Agent PM");
////			agentDTO.setEmail("elgountariayoub21@gmail.com");
////            String password = passwordEncoder.encode("agentpassword");
////			agentDTO.setPassword(password);
////			agentService.save(agentDTO);
////            userRepository.save(agentDTO);
//		};
//	}
}

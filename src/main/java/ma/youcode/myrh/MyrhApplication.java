package ma.youcode.myrh;

import jakarta.annotation.Resource;
import ma.youcode.myrh.dtos.RecruiterDTO;
import ma.youcode.myrh.models.Recruiter;
import ma.youcode.myrh.services.FilesStorageService;
import ma.youcode.myrh.services.implementations.RecruiterService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MyrhApplication implements CommandLineRunner {
	@Resource
	FilesStorageService storageService;
	public static void main(String[] args) {
		SpringApplication.run(MyrhApplication.class, args);
	}

	@Override
	public void run(String... arg) throws Exception {
//    storageService.deleteAll();
		storageService.init();
	}
//	@Bean
//	CommandLineRunner start(RecruiterService recruiterService){
//		return args -> {
//			RecruiterDTO recruiterDTO = new RecruiterDTO();
//			recruiterDTO.setLogin("ESD");
//			recruiterDTO.setEmail("elgountariayoub22@gmail.com");
//			recruiterDTO.setPassword("password");
//			recruiterDTO.setAddress("Safi");
//			recruiterDTO.setPhone("phone");
//			recruiterDTO.setImage("image");
//			recruiterService.save(recruiterDTO);
//		};
//	}
}

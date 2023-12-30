package ma.youcode.myrh;

import ma.youcode.myrh.dtos.RecruiterDTO;
import ma.youcode.myrh.models.Recruiter;
import ma.youcode.myrh.services.implementations.RecruiterService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MyrhApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyrhApplication.class, args);
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

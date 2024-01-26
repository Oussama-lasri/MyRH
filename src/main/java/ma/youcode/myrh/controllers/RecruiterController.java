package ma.youcode.myrh.controllers;


import jakarta.validation.Valid;
import ma.youcode.myrh.dao.response.JwtAuthenticationResponse;
import ma.youcode.myrh.dtos.RecruiterDTO;
import ma.youcode.myrh.dtos.StatisticsDTO;
import ma.youcode.myrh.services.implementations.RecruiterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.function.EntityResponse;

import java.util.logging.Level;
import java.util.logging.Logger;

@RequestMapping("api/v1/recruiters")
@CrossOrigin("*")
@RestController
public class RecruiterController {
    @Autowired
    RecruiterService recruiterService;
    @PostMapping
    public ResponseEntity<JwtAuthenticationResponse> create(@ModelAttribute RecruiterDTO recruiterToSave){
        return ResponseEntity.ok(recruiterService.save(recruiterToSave));
    }
    @GetMapping("/statistics/{id}")
    public ResponseEntity<StatisticsDTO> statistics(
            @PathVariable long id) {
        StatisticsDTO statisticsDTO = recruiterService.statistics(id);
        return ResponseEntity.ok(statisticsDTO);
    }


    @PostMapping("/{id}/{code}/validation")
    public ResponseEntity<Boolean> create(@PathVariable long id, @PathVariable String code) {
        Boolean response = recruiterService.validateAccount(id, code);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}/resend-validation-code")
    public ResponseEntity<String> resendValidationCode(
            @PathVariable long id
    ) {
        String recruiterDTO = recruiterService.resendValidationCode(id);
        return ResponseEntity.ok(recruiterDTO);
    }
    @GetMapping()
    public ResponseEntity<Page<RecruiterDTO>> getAll(Pageable pageable){
        Page<RecruiterDTO> recruiters = recruiterService.findAll(pageable);
        return ResponseEntity.ok(recruiters);
    }

    @GetMapping("/{email}")
    public ResponseEntity<RecruiterDTO> getByEmail(
            @PathVariable String email){
        RecruiterDTO recruiter = recruiterService.findByEmail(email);
        return ResponseEntity.ok(recruiter);
    }


}

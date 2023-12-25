package ma.youcode.myrh.controllers;


import jakarta.validation.Valid;
import ma.youcode.myrh.dtos.RecruiterDTO;
import ma.youcode.myrh.services.implementations.RecruiterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.function.EntityResponse;

@RequestMapping("api/v1/recruiters")
@RestController
public class RecruiterController {

    @Autowired
    RecruiterService recruiterService;
    @PostMapping
    public ResponseEntity<RecruiterDTO> create(@Valid @RequestBody RecruiterDTO recruiterToSave){
        RecruiterDTO recruiterDTO = recruiterService.save(recruiterToSave);
        return ResponseEntity.ok(recruiterDTO);
    }
}

package ma.youcode.myrh.controllers;


import jakarta.validation.Valid;
import ma.youcode.myrh.dtos.RecruiterDTO;
import ma.youcode.myrh.services.implementations.RecruiterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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

    @PostMapping("/{id}/{code}/validation")
    public ResponseEntity<String> create(@PathVariable long id, @PathVariable String code) {
        String recruiterDTO = recruiterService.validateAccount(id, code);
        return ResponseEntity.ok(recruiterDTO);
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
}

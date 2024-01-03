package ma.youcode.myrh.controllers;


import ma.youcode.myrh.dtos.ResumeDTO;
import ma.youcode.myrh.services.IResumeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/v1/resumes")
@RestController
public class ResumeController {

    @Autowired
    IResumeService resumeService;

    @PostMapping("/{jobOfferId}")
    public ResponseEntity<ResumeDTO> create(@PathVariable long jobOfferId, @ModelAttribute ResumeDTO resumeToSave) {
        ResumeDTO resumeDTO = resumeService.save(resumeToSave, jobOfferId);
        return ResponseEntity.ok(resumeDTO);
    }

    @GetMapping()
    public ResponseEntity<List<ResumeDTO>> getAll() {
        List<ResumeDTO> resumes = resumeService.findAll();
        return ResponseEntity.ok(resumes);
    }

}

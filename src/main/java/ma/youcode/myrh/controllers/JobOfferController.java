package ma.youcode.myrh.controllers;


import ma.youcode.myrh.dtos.JobOfferDTO;
import ma.youcode.myrh.services.IJobOfferService;
import ma.youcode.myrh.services.implementations.JobOfferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/v1/jobOffers")
@RestController
public class JobOfferController {

    @Autowired
    IJobOfferService jobOfferService;

    @PostMapping
    public ResponseEntity<JobOfferDTO> create(@ModelAttribute JobOfferDTO jobOfferToSave) {
        JobOfferDTO jobOfferDTO = jobOfferService.save(jobOfferToSave);
        return ResponseEntity.ok(jobOfferDTO);
    }

    @GetMapping("/search={title}")
    public ResponseEntity<List<JobOfferDTO>> resendValidationCode(
            @PathVariable String title) {
        List<JobOfferDTO> jobOfferDTOList = jobOfferService.findByTitle(title)
        return ResponseEntity.ok(jobOfferDTOList);
    }

    @GetMapping()
    public ResponseEntity<List<JobOfferDTO>> getAll() {
        List<JobOfferDTO> jobOffers = jobOfferService.findAll();
        return ResponseEntity.ok(jobOffers);
    }

    @GetMapping("/pageable")
    public ResponseEntity<Page<JobOfferDTO>> getAllPageable(Pageable pageable) {
        Page<JobOfferDTO> jobOffers = jobOfferService.findAllPageable(pageable);
        return ResponseEntity.ok(jobOffers);
    }

}

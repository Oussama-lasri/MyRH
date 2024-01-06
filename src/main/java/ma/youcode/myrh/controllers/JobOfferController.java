package ma.youcode.myrh.controllers;


import ma.youcode.myrh.dtos.JobOfferDTO;
import ma.youcode.myrh.models.Status;
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
@CrossOrigin("*")
public class JobOfferController {

    @Autowired
    IJobOfferService jobOfferService;

    @PostMapping("/{recruiterId}")
    public ResponseEntity<JobOfferDTO> create(
            @PathVariable long recruiterId,
            @RequestBody JobOfferDTO jobOfferToSave) {
        JobOfferDTO jobOfferDTO = jobOfferService.save(jobOfferToSave, recruiterId);
        return ResponseEntity.ok(jobOfferDTO);
    }

    @GetMapping("/search={title}")
    public ResponseEntity<List<JobOfferDTO>> searchByTitle(
            @PathVariable String title) {
        List<JobOfferDTO> jobOfferDTOList = jobOfferService.findByTitle(title);
        return ResponseEntity.ok(jobOfferDTOList);
    }
    @PostMapping("/{jobOfferId}/{newStatus}")
    public ResponseEntity<String> searchByTitle(
            @PathVariable long jobOfferId,
            @PathVariable String newStatus
    ) {
        String  response = jobOfferService.updateStatus(jobOfferId, Status.valueOf(newStatus));
        return ResponseEntity.ok(response);
    }

    @GetMapping("/status={status}")
    public ResponseEntity<List<JobOfferDTO>> searchByStatus(
            @PathVariable String status) {
        List<JobOfferDTO> jobOfferDTOList = jobOfferService.findAllByStatus(status);
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

    @GetMapping("/{id}/{newStatus}")
    public ResponseEntity<String> updateStatus(
            @PathVariable long id,
            @PathVariable String newStatus
    ) {
        String resumeStatus = jobOfferService.updateStatus(id, Status.valueOf(newStatus));
        return ResponseEntity.ok(resumeStatus);
    }

}

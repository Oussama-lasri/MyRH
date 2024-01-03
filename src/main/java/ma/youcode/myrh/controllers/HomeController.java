package ma.youcode.myrh.controllers;


import jakarta.validation.Valid;
import ma.youcode.myrh.dtos.RecruiterDTO;
import ma.youcode.myrh.services.implementations.RecruiterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/")
@RestController
public class HomeController {
    @GetMapping
    public ResponseEntity<String> Hello(
    ) {
        return ResponseEntity.ok("Hello, JWT");
    }
}

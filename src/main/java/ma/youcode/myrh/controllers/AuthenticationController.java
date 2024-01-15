package ma.youcode.myrh.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import ma.youcode.myrh.dao.request.SignUpRequest;
import ma.youcode.myrh.dao.request.SigninRequest;
import ma.youcode.myrh.dao.response.JwtAuthenticationResponse;
import ma.youcode.myrh.services.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    @PostMapping("/signup")
    public ResponseEntity<JwtAuthenticationResponse> signup(@Valid @RequestBody SignUpRequest request) {
        return ResponseEntity.ok(authenticationService.signup(request));
    }

    @PostMapping("/signin")
    public ResponseEntity<JwtAuthenticationResponse> signin(@Valid @RequestBody SigninRequest request) {
        return ResponseEntity.ok(authenticationService.signin(request));
    }
}

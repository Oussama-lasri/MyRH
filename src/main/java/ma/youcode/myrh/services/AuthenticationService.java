package ma.youcode.myrh.services;

import ma.youcode.myrh.dao.request.SignUpRequest;
import ma.youcode.myrh.dao.request.SigninRequest;
import ma.youcode.myrh.dao.response.JwtAuthenticationResponse;

public interface AuthenticationService {
    JwtAuthenticationResponse signup(SignUpRequest request);

    JwtAuthenticationResponse signin(SigninRequest request);
}

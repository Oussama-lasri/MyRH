package ma.youcode.myrh.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class RecruiterDTO {
    private Long id;

    private String login;
    @NotBlank(message = "email is required")
    private String email;
    @NotBlank(message = "password is required")
    private String password;
    @NotBlank(message = "phone is required")
    private String phone;
    @NotBlank(message = "address is required")
    private String address;
    @NotBlank(message = "image is required")
    private String image;
}

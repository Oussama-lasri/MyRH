package ma.youcode.myrh.dtos;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;

//@EqualsAndHashCode(callSuper = true)
@Data
public class RecruiterDTO {
        protected Long id;
    @NotBlank(message = "login is required")
    private String login;

    @NotBlank(message = "email is required")
    @Email(message = "Invalid email format")
    private String email;

    @NotBlank(message = "password is required")
    private String password;
    @NotBlank(message = "name is required")
    private String name;

    @NotBlank(message = "phone is required")
    private String phone;

    @NotBlank(message = "address is required")
    private String address;

    //    @NotBlank(message = "image is required")
    private MultipartFile image;

    private String imageUrl;
}

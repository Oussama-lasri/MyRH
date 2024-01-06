package ma.youcode.myrh.dtos;

import jakarta.persistence.MappedSuperclass;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@MappedSuperclass
public class UserDTO {
    protected Long id;
    @NotBlank(message = "email is required")
    @Email(message = "Invalid email format")
    protected String email;
    @NotBlank(message = "password is required")
    protected String password;
    @NotBlank(message = "name is required")
    protected String name;

    protected String role;
}

package ma.youcode.myrh.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class UserDTO {
    protected Long id;
    @NotBlank(message = "email is required")
    protected String email;
    @NotBlank(message = "password is required")
    protected String password;
    @NotBlank(message = "name is required")
    private String name;

}

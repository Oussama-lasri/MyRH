package ma.youcode.myrh.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class AgentDTO extends UserDTO{
    @NotBlank(message = "name is required")
    private String name;

}

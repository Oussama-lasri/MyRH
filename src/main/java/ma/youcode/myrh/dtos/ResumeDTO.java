package ma.youcode.myrh.dtos;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import ma.youcode.myrh.models.Status;
import org.springframework.web.multipart.MultipartFile;

@Data
public class ResumeDTO {
    private Long id;
    @NotBlank
    private MultipartFile resume;

}

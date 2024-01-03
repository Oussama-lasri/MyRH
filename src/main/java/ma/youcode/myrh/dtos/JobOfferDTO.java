package ma.youcode.myrh.dtos;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import ma.youcode.myrh.models.Status;
import org.springframework.web.multipart.MultipartFile;

@Data
public class JobOfferDTO {

    private Long id;
    @NotBlank
    private String title;
    @NotBlank
    private String description;
    @NotBlank
    private String city;
    @NotBlank
    private String profile;
    @NotBlank
    private String educationalLevel;
    @NotBlank
    private String salary;

    @NotBlank
    @Enumerated(EnumType.STRING)
    private Status status;
}

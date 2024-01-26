package ma.youcode.myrh.dtos;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import ma.youcode.myrh.models.JobOffer;
import ma.youcode.myrh.models.ResumeStatus;
import ma.youcode.myrh.models.Status;
import ma.youcode.myrh.models.UserStatus;
import org.springframework.web.multipart.MultipartFile;

@Data
public class ResumeDTO {
    private Long id;
    private Long userId;
//    @NotBlank
    private MultipartFile resume;
    private String resumeUrl;

    private JobOfferDTO jobOffer;

//    @NotBlank
    @Enumerated(EnumType.STRING)
    private ResumeStatus resumeStatus;

    @Enumerated(EnumType.STRING)
    private UserStatus recruiterStatus;
}

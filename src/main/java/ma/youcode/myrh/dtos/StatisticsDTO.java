package ma.youcode.myrh.dtos;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import ma.youcode.myrh.models.UserStatus;
import org.springframework.web.multipart.MultipartFile;

@Data
public class StatisticsDTO {
    private int pendingJobOffersCount;
    private int acceptedJobOffersCount;
    private int refusedJobOffersCount;
    private int resumesCount;
}

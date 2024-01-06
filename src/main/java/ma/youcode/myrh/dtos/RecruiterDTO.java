    package ma.youcode.myrh.dtos;

    import jakarta.persistence.Column;
    import jakarta.validation.constraints.Email;
    import jakarta.validation.constraints.NotBlank;
    import lombok.*;
    import org.springframework.web.multipart.MultipartFile;

    import java.time.LocalDateTime;

    //@EqualsAndHashCode(callSuper = true)
    @EqualsAndHashCode(callSuper = true)
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public class RecruiterDTO extends UserDTO{
        @NotBlank(message = "login is required")
        private String login;
        @NotBlank(message = "phone is required")
        private String phone;

        @NotBlank(message = "address is required")
        private String address;
        private MultipartFile image;
        private String imageUrl;
    }

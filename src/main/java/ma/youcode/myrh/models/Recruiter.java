package ma.youcode.myrh.models;


import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity(name = "recruiters")
public class Recruiter extends User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String login;
    private String phone;
    private String address;
    @Column(nullable = false, unique = true)
    private String image;

    @Column(nullable = false)
    private String codeValidation;
    @Column(nullable = false)
    private LocalDateTime codeValidationTimestamp = LocalDateTime.now();
    @Column(nullable = false)
    private Boolean isValid = false;
}
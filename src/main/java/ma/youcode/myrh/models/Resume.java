package ma.youcode.myrh.models;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "resumes")
public class Resume {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String resume;

    @Enumerated(EnumType.STRING)
    protected  UserStatus recruiterStatus;

    @ManyToOne
    @JoinColumn(name = "job_offer_id")
    private JobOffer jobOffer;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}

package ma.youcode.myrh.models;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity(name = "recruiters")
public class Recruiter extends User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String login;
    private String phone;
    private String address;
    private String image;
}

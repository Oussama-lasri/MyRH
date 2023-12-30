package ma.youcode.myrh.models;


import jakarta.persistence.*;
import lombok.Data;

@Data
@MappedSuperclass
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String password;
}

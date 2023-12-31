package ma.youcode.myrh.models;


import jakarta.persistence.*;
import lombok.Data;

@Data
@MappedSuperclass
public abstract class User {
    private String email;
    private String password;
}

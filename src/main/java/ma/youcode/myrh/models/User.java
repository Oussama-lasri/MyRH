package ma.youcode.myrh.models;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Data
@NoArgsConstructor @AllArgsConstructor
@Builder
@Entity
@Table(name = "users")
@Inheritance
//@DiscriminatorColumn(name = "role", discriminatorType = DiscriminatorType.STRING)
//@DiscriminatorValue("USER")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @Column(unique = true)
    protected String email;

    protected String password;
//    @Column(name = "role", insertable = false, updatable = false)
    protected String role;

    protected  UserStatus status;


    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Resume> resumes;
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singleton(new SimpleGrantedAuthority(this.getClass().getSimpleName()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}

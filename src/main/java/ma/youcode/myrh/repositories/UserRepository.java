package ma.youcode.myrh.repositories;

import ma.youcode.myrh.models.User;
import ma.youcode.myrh.models.UserStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    // Since email is unique, we'll find users by email
    Optional<User> findByEmail(String email);
    List<User> findAllByStatus(UserStatus userStatus);
}

package ma.youcode.myrh.repositories;

import ma.youcode.myrh.models.Recruiter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IRecruiterRepository extends JpaRepository<Recruiter, Long> {
    Recruiter findByEmail(String email);
    Recruiter findRecruiterById(long id);
}

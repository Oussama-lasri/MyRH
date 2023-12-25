package ma.youcode.myrh.repositories;

import ma.youcode.myrh.models.Recruiter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRecruiterRepository extends JpaRepository<Recruiter, Long> {
}

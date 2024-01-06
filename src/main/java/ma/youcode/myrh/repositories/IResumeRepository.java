package ma.youcode.myrh.repositories;

import ma.youcode.myrh.models.JobOffer;
import ma.youcode.myrh.models.Resume;
import ma.youcode.myrh.models.Recruiter;
import ma.youcode.myrh.models.Resume;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IResumeRepository extends JpaRepository<Resume, Long> {
    Resume save(Resume resume);
    List<Resume> findByJobOffer(JobOffer jobOffer);
    List<Resume> findAllByJobOffer_Recruiter_Id(Long recruiterId);

}

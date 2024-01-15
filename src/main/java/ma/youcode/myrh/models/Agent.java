package ma.youcode.myrh.models;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

//@EqualsAndHashCode(callSuper = true)
@EqualsAndHashCode(callSuper = true)
@Entity
@Data
//@DiscriminatorValue("AGENT")
public class Agent extends User {

    @OneToMany(mappedBy = "agent", cascade = CascadeType.ALL)
    private List<Recruiter> recruiters;
    @OneToMany(mappedBy = "recruiter", cascade = CascadeType.ALL)
    private List<JobOffer> jobOffers;

}
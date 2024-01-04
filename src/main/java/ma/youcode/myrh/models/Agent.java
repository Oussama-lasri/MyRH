package ma.youcode.myrh.models;


import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;
import java.util.List;

//@EqualsAndHashCode(callSuper = true)
@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@Table(name = "agents")
@DiscriminatorValue("AGENT")
public class Agent extends User {

    private String name;

    @OneToMany(mappedBy = "agent", cascade = CascadeType.ALL)
    private List<Recruiter> recruiters;
    @OneToMany(mappedBy = "recruiter", cascade = CascadeType.ALL)
    private List<JobOffer> jobOffers;
}
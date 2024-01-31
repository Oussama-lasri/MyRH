import { JobOffer } from "./JobOffer";

export interface Resume {
  id?: number | null;
  resume: any;
  resumeUrl: string;
  recruiterStatus?: any;
  status?: any;
  jobOffer?: JobOffer;
}

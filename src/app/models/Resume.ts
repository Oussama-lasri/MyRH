import { JobOffer } from "./JobOffer";

export interface Resume {
  id?: number | null;
  resume: any;
  resumeUrl: string;
  recruiterStatus?: any;
  resumeStatus?: any;
  jobOffer?: JobOffer;
}

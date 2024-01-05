import { Status } from "./JobOffer copy";

export interface JobOffer {
    id?: number | null;
    title: string | null;
    description: string | null;
    city: string | null;
    profile: string | null;
    educationalLevel: string | null;
    salary: string;
    status: string;
  }
  
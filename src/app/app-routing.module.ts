import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { JobOfferIndexComponent } from './components/jobOffers/job-offer-index/job-offer-index.component';
import { JobOfferCreateComponent } from './components/jobOffers/job-offer-create/job-offer-create.component';
import { RecruiterJobOffersComponent } from './components/dashboard/recruiter-job-offers/recruiter-job-offers.component';
import { RecruiterSubmissionsComponent } from './components/dashboard/recruiter-submissions/recruiter-submissions.component';
import { DashboardAgentComponent } from './components/dashboard-agent/dashboard-agent.component';
import { ValidationComponent } from './components/validation/validation.component';
import { ChatComponent } from './components/chat/chat.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RecruiterCreateComponent } from './components/recruiter/recruiter-create/recruiter-create.component';

const routes: Routes = [

  { path: 'chat/:userId', component: ChatComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'recruiter-job-offers', component: RecruiterJobOffersComponent },
      { path: 'recruiter-submissions', component: RecruiterSubmissionsComponent },
      { path: '', redirectTo: 'recruiter-job-offers', pathMatch: 'full' }, // Default child route
    ],
  },
  { path: 'agent-dash', component: DashboardAgentComponent },
  { path: 'register', component: RecruiterCreateComponent },
  { path: 'validation', component: ValidationComponent },
  { path: 'jobOffer', component: JobOfferIndexComponent },
  { path: 'jobOffer-create', component: JobOfferCreateComponent },
  // {path:"jobOffer-details", component: JobOfferDetailsComponent}

  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

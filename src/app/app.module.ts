import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecruitersComponent } from './components/recruiters/recruiters.component';
import { AgentsComponent } from './components/agents/agents.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/includes/footer/footer.component';
import { NavbarComponent } from './components/includes/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobOfferIndexComponent } from './components/jobOffers/job-offer-index/job-offer-index.component';
import { ResumeIndexComponent } from './components/resumes/resume-index/resume-index.component';
import { JobOfferCreateComponent } from './components/jobOffers/job-offer-create/job-offer-create.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardAgentComponent } from './components/dashboard-agent/dashboard-agent.component';
import { DashNavbarComponent } from './components/includes/dash-navbar/dash-navbar.component';
import { RecruiterJobOffersComponent } from './components/dashboard/recruiter-job-offers/recruiter-job-offers.component';
import { RecruiterSubmissionsComponent } from './components/dashboard/recruiter-submissions/recruiter-submissions.component';
import { ValidationComponent } from './components/validation/validation.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    RecruitersComponent,
    AgentsComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    DashboardComponent,
    RegisterComponent,
    JobOfferIndexComponent,
    ResumeIndexComponent,
    JobOfferCreateComponent,
    LoginComponent,
    DashboardAgentComponent,
    DashNavbarComponent,
    RecruiterJobOffersComponent,
    RecruiterSubmissionsComponent,
    ValidationComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { ReactiveFormsModule } from '@angular/forms';
import { JobOfferIndexComponent } from './components/jobOffers/job-offer-index/job-offer-index.component';
import { ResumeIndexComponent } from './components/resumes/resume-index/resume-index.component';
import { JobOfferCreateComponent } from './components/jobOffers/job-offer-create/job-offer-create.component';

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
    JobOfferCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

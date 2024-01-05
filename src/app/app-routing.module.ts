import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { JobOfferIndexComponent } from './components/jobOffers/job-offer-index/job-offer-index.component';
import { JobOfferCreateComponent } from './components/jobOffers/job-offer-create/job-offer-create.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  {path:"jobOffer", component: JobOfferIndexComponent},
  {path:"jobOffer-create", component: JobOfferCreateComponent},
  // {path:"jobOffer-details", component: JobOfferDetailsComponent}


  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

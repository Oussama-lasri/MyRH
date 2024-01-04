import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecruitersComponent } from './components/recruiters/recruiters.component';
import { AgentsComponent } from './components/agents/agents.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/includes/footer/footer.component';
import { NavbarComponent } from './components/includes/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RecruitersComponent,
    AgentsComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
 import { ProjectsComponent } from './components/selecters/projects/projects.component';
import { ProfileCardsComponent } from './components/selecters/profile-cards/profile-cards.component';
import { FooterComponent } from './components/selecters/footer/footer.component';
import { ProjectCardsComponent } from './components/selecters/project-cards/project-cards.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
     ProjectsComponent,
    ProfileCardsComponent,
    FooterComponent,
    ProjectCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

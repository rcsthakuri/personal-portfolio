import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './home/about-me/about-me.component';
import { SkillsComponent } from './home/skills/skills.component';
import { WorkExperienceComponent } from './home/work-experience/work-experience.component';
import { EducationComponent } from './home/education/education.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule  } from './material/material.module';
import { HeaderTextAnimationComponent } from './home/header/header-text-animation/header-text-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    WorkExperienceComponent,
    EducationComponent,
    HeaderComponent,
    FooterComponent,
    HeaderTextAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

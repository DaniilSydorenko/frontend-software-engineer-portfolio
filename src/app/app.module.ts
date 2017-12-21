import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AgmCoreModule } from '@agm/core';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

/** Routing **/
import { AppRouting } from './app.routing';

/** Main Component **/
import { AppComponent } from './app.component';

/** Shared Components **/
import { HeaderComponent } from './shared/components/header/header.component';
import { MenuComponent } from './shared/components/header/menu/menu.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ContactFormComponent } from './shared/components/footer/contact-form/contact-form.component';
import { GoogleMapComponent } from './shared/components/footer/google-map/google-map.component';

/** Home Components **/
import { HomeComponent } from './home/home.component';
import { AppHeroComponent } from './home/hero/hero.component';
import { AppTimelineComponent } from './home/timeline/timeline.component';
import { AppTimelineBlockComponent } from './home/timeline/timeline-block/timeline-block.component';
import { AppProjectsComponent } from './home/projects/projects.component';
import { AppProjectLeftComponent } from './home/projects/project-left/project-left.component';
import { AppProjectRightComponent } from './home/projects/project-right/project-right.component';
import { AppProjectDataComponent } from './home/projects/project-data/project-data.component';
import { AppProjectViewComponent } from './home/projects/project-view/project-view.component';
import { AppSkillsComponent } from './home/skills/skills.component';
import { AppSkillComponent } from './home/skills/skill/skill.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRouting,
    ScrollToModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4v_8kzUhXhYR6d7AvqedRKDfUYZkAovM'
    }),
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ContactFormComponent,
    GoogleMapComponent,
    HomeComponent,
    AppHeroComponent,
    AppTimelineComponent,
    AppTimelineBlockComponent,
    AppProjectsComponent,
    AppProjectLeftComponent,
    AppProjectRightComponent,
    AppProjectDataComponent,
    AppProjectViewComponent,
    AppSkillsComponent,
    AppSkillComponent,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

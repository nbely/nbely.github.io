import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppUiModule } from '../app-ui.module';
import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [
    ExperienceComponent,
    ProjectsComponent,
    VolunteerComponent,
    WorkComponent
  ],
  imports: [
    CommonModule,
    AppUiModule,
    ExperienceRoutingModule
  ]
})
export class ExperienceModule { }

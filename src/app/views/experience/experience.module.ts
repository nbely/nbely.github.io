import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppSharedModule } from 'src/app/app-shared.module';
import { AppUiModule } from '../../app-ui.module';
import { ExperienceComponent } from './experience.component';
import { ExperienceRoutingModule } from './experience-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [
    ExperienceComponent,
    ProjectsComponent,
    WorkComponent
  ],
  imports: [
    CommonModule,
    AppUiModule,
    AppSharedModule,
    ExperienceRoutingModule
  ]
})
export class ExperienceModule { }

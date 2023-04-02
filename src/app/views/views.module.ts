import { CommonModule } from '@angular/common';
import { MAT_TABS_CONFIG } from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppSharedModule } from 'src/app/app-shared.module';
import { AppUiModule } from '../app-ui.module';
import { BackgroundComponent } from './background/background.component';
import { ContactComponent } from './contact/contact.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewsComponent } from './views.component';
import { ViewsRoutingModule } from './views-routing.module';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [
    BackgroundComponent,
    ContactComponent,
    IntroductionComponent,
    ProjectsComponent,
    ViewsComponent,
    WorkComponent
  ],
  imports: [
    ViewsRoutingModule,
    AppUiModule,
    AppSharedModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: MAT_TABS_CONFIG, useValue: { animationDuration: '0ms' } }
  ]
})
export class ViewsModule { }

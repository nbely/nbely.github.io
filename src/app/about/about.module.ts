import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_TABS_CONFIG } from '@angular/material/tabs';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AppUiModule } from '../app-ui.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { backgroundComponent } from './background/background.component';

@NgModule({
  declarations: [
    AboutComponent,
    IntroductionComponent,
    backgroundComponent,
  ],
  imports: [
    CommonModule,
    AppUiModule,
    AboutRoutingModule,
  ],
  providers: [
    { provide: MAT_TABS_CONFIG, useValue: { animationDuration: '0ms' } }
  ]
})
export class AboutModule { }

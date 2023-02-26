import { CommonModule } from '@angular/common';
import { MAT_TABS_CONFIG } from '@angular/material/tabs';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { AppSharedModule } from 'src/app/app-shared.module';
import { AppUiModule } from '../../app-ui.module';
import { BackgroundComponent } from './background/background.component';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  declarations: [
    AboutComponent,
    BackgroundComponent,
    IntroductionComponent,
  ],
  imports: [
    AboutRoutingModule,
    AppUiModule,
    AppSharedModule,
    CommonModule,
  ],
  providers: [
    { provide: MAT_TABS_CONFIG, useValue: { animationDuration: '0ms' } }
  ]
})
export class AboutModule { }

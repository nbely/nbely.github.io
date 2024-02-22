import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppUiModule } from './app-ui.module';
import { ArrowButtonComponent } from './components/arrow-button/arrow-button.component';
import { ChevronSVGComponent } from './components/arrow-button/chevron-svg/chevron-svg.component';
import { ExperienceCardComponent } from './components/experience-page/experience-card/experience-card.component';
import { ExperienceDialogComponent } from './components/experience-page/experience-card/experience-dialog/experience-dialog.component';
import { ExperiencePageComponent } from './components/experience-page/experience-page.component';
import { IconComponent } from './components/icon/icon.component';
import { IconGroupComponent } from './components/icon-group/icon-group.component';

const sharedComponents = [
  ArrowButtonComponent,
  ChevronSVGComponent,
  ExperienceCardComponent,
  ExperienceDialogComponent,
  ExperiencePageComponent,
  IconComponent,
  IconGroupComponent,
];

@NgModule({
  declarations: sharedComponents,
  imports: [AppUiModule, CommonModule],
  exports: sharedComponents,
})
export class AppSharedModule {}

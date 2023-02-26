import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppUiModule } from './app-ui.module';
import { ArrowButtonComponent } from './components/arrow-button/arrow-button.component';
import { ChevronSVGComponent } from './components/arrow-button/chevron-svg/chevron-svg.component';
import { IconGroupComponent } from './components/icon-group/icon-group.component';

const sharedComponents = [
  ArrowButtonComponent,
  ChevronSVGComponent,
  IconGroupComponent
]

@NgModule({
  declarations: sharedComponents,
  imports: [
    AppUiModule,
    CommonModule
  ],
  exports: sharedComponents
})
export class AppSharedModule { }
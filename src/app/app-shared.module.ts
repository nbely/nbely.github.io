import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppUiModule } from './app-ui.module';
import { ArrowButtonComponent } from './components/arrow-button/arrow-button.component';
import { ChevronLeftSVGComponent } from './components/arrow-button/chevron-left/chevron-left-svg.component';
import { ChevronRightSVGComponent } from './components/arrow-button/chevron-right/chevron-right-svg.component';
import { IconGroupComponent } from './components/icon-group/icon-group.component';

const sharedComponents = [
  ArrowButtonComponent,
  ChevronLeftSVGComponent,
  ChevronRightSVGComponent,
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

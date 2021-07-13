import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppUiModule } from '../app-ui.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    AppUiModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { NavService } from '../nav.service';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {
  formSubmitted: boolean = false;
  isSubmitting: boolean = false;
  formData!: FormGroup;

  constructor(
    private builder: FormBuilder,
    private contactService: ContactService,
    private navService: NavService
  ) {}

  ngOnInit(): void {
    this.navService.navLinks.next(null);
    this.formData = this.builder.group({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.compose([
        Validators.required, 
        Validators.email
      ])),
      comment: new FormControl('', [Validators.required])
    })
  }

  onSubmit(form: any) {
    this.isSubmitting = true;
    console.log(form);
    this.contactService.postMessage(form).subscribe((res: any) => {
      this.isSubmitting = false;
      this.formSubmitted = true;
    }, (error: any) => {
      console.warn(error.responseText);
      console.log({ error })
      this.isSubmitting = false;
    })
    this.formData.reset();
  }
}

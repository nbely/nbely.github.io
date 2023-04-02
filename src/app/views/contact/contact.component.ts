import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {
  formData!: FormGroup;
  formSubmitted: boolean = false;
  isSubmitting: boolean = false;

  constructor(
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.formData = new FormGroup({
      'fullname': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      'comment': new FormControl(null, [Validators.required])
    });
  }

  onSubmit(form: any) {
    this.isSubmitting = true;
    this.contactService.postMessage(form).subscribe(() => {
      this.isSubmitting = false;
      this.formSubmitted = true;
    }, (error: any) => {
      console.warn(error.responseText);
      this.isSubmitting = false;
    })
    this.formData.reset();
  }
}

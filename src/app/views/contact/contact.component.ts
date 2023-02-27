import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

import { ContactService } from '../../services/contact.service';
import { NavService } from '../../services/nav.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {
  collapseNav: boolean = false;
  formData!: FormGroup;
  formSubmitted: boolean = false;
  isSubmitting: boolean = false;
  previousLink: string | null = 'projects';

  private collapseSub: Subscription | undefined;

  constructor(
    private contactService: ContactService,
    private navService: NavService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.navService.navLinks.next(null);
    this.formData = new FormGroup({
      'fullname': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      'comment': new FormControl(null, [Validators.required])
    });

    this.collapseSub = this.navService.isCollapsed
      .subscribe((collapseState: boolean) => {
        this.collapseNav = collapseState;
      });
  }

  onClickPreviousPage() {
    this.router.navigate([`/experience/${this.previousLink}`]);
    this.navService.activeLink.next(this.previousLink);
  }

  onSubmit(form: any) {
    this.isSubmitting = true;
    console.log(form);

    this.contactService.postMessage(form).subscribe(() => {
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

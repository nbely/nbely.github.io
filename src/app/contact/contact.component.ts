import { Component, OnInit } from '@angular/core';

import { NavService } from '../nav.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private navService: NavService) { }

  ngOnInit(): void {
    this.navService.navLinks.next(null);
  }
}

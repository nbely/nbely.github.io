import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { NavService } from '../nav.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  navLinks: string[] = ['introduction', 'education', 'resume'];
  activeLink: string | null = 'introduction';
  collapseNav: boolean = false;

  private activeLinkSub: Subscription;
  private collapseSub: Subscription;

  constructor(
    private navService: NavService, 
    private router: Router
  ) {
    this.activeLinkSub = this.navService.activeLink
      .subscribe((link: string | null) => {
        if (link && this.navLinks.indexOf(link) !== -1) {
          this.activeLink = link;
          this.router.navigate([`/about/${this.activeLink}`]);
        }
      })

    this.collapseSub = this.navService.isCollapsed
      .subscribe((collapseState: boolean) => {
        this.collapseNav = collapseState;
      })
  }

  ngOnInit(): void {
    this.navService.navLinks.next(this.navLinks);
    this.router.navigate([`/about/${this.activeLink}`]);
  }

  ngOnDestroy() {
    this.activeLinkSub.unsubscribe();
    this.collapseSub.unsubscribe();
  }
}

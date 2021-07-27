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

  private activeLinkSub: Subscription | undefined;
  private collapseSub: Subscription | undefined;

  constructor(
    private navService: NavService, 
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.navService.navLinks.next(this.navLinks);
    this.router.navigate([`/about/${this.activeLink}`]);

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

  ngOnDestroy() {
    if (this.activeLinkSub) this.activeLinkSub.unsubscribe();
    if (this.collapseSub) this.collapseSub.unsubscribe();
  }
}

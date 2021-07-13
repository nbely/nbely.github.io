import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { NavService } from '../nav.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, OnDestroy {
  navLinks: string[] = ['projects', 'volunteer', 'work'];
  activeLink: string | null = 'projects';
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
          this.router.navigate([`/experience/${this.activeLink}`]);
        }
      })

    this.collapseSub = this.navService.isCollapsed
      .subscribe((collapseState: boolean) => {
        this.collapseNav = collapseState;
      })
  }

  ngOnInit(): void {
    this.navService.navLinks.next(this.navLinks);
    this.router.navigate([`/experience/${this.activeLink}`]);
  }

  ngOnDestroy() {
    this.activeLinkSub.unsubscribe();
    this.collapseSub.unsubscribe();
  }
}

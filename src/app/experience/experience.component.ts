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

  private activeLinkSub: Subscription | undefined;
  private collapseSub: Subscription | undefined;

  constructor(
    private navService: NavService, 
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.navService.navLinks.next(this.navLinks);
    this.router.navigate([`/experience/${this.activeLink}`]);

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

  ngOnDestroy() {
    if (this.activeLinkSub) this.activeLinkSub.unsubscribe();
    if (this.collapseSub) this.collapseSub.unsubscribe();
  }
}

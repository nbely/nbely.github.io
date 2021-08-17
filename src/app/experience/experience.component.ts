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
  navLinks: string[] = ['projects', 'volunteer'];
  activeLink: string | null = 'projects';
  nextLink: string | null = 'volunteer';
  collapseNav: boolean = false;
  nextPageReroutes: boolean = false;

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
        if (link) {
          let index: number = this.navLinks.indexOf(link);
          if (index !== -1) {
            this.activeLink = link;
            this.router.navigate([`/experience/${this.activeLink}`]);
            if (index < this.navLinks.length - 1) {
              this.nextLink = this.navLinks[index + 1];
            }
            else {
              this.nextLink = 'contact me';
            }
          }
          if (this.collapseNav) {
            this.nextLink = 'contact me';
          }
        }
      });

    this.collapseSub = this.navService.isCollapsed
      .subscribe((collapseState: boolean) => {
        this.collapseNav = collapseState;
        if (this.collapseNav) {
          this.nextLink = 'contact me';
        }
        else {
          if (this.activeLink) {
            let index: number = this.navLinks.indexOf(this.activeLink);
            if (index < this.navLinks.length - 1) {
              this.nextLink = this.navLinks[index + 1];
            }
            else {
              this.nextLink = 'contact me';
            }
          }
        }
      });
  }

  onClickNextPage() {
    if (this.nextLink !== 'contact me') {
      this.router.navigate([`/about/${this.nextLink}`]);
      this.navService.activeLink.next(this.nextLink);
    }
    else {
      this.router.navigate([`/contact`]);
      this.nextPageReroutes = true;
    }
  }

  ngOnDestroy() {
    if (this.activeLinkSub) this.activeLinkSub.unsubscribe();
    if (this.collapseSub) this.collapseSub.unsubscribe();
  }
}

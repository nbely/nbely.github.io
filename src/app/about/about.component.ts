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
  navLinks: string[] = ['introduction', 'background'];
  activeLink: string | null = 'introduction';
  nextLink: string | null = 'background';
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
    this.router.navigate([`/about/${this.activeLink}`]);

    this.activeLinkSub = this.navService.activeLink
      .subscribe((link: string | null) => {
        if (link) {
          let index: number = this.navLinks.indexOf(link);
          if (index !== -1) {
            this.activeLink = link;
            this.router.navigate([`/about/${this.activeLink}`]);
            if (index < this.navLinks.length - 1) {
              this.nextLink = this.navLinks[index + 1];
            }
            else {
              this.nextLink = 'projects';
            }
          }
        }
      });

    this.collapseSub = this.navService.isCollapsed
      .subscribe((collapseState: boolean) => {
        this.collapseNav = collapseState;
        if (this.collapseNav) {
          this.nextLink = 'projects';
        }
        else {
          if (this.activeLink) {
            let index: number = this.navLinks.indexOf(this.activeLink);
            if (index < this.navLinks.length - 1) {
              this.nextLink = this.navLinks[index + 1];
            }
            else {
              this.nextLink = 'projects';
            }
          }
        }
      });
  }

  onClickNextPage() {
    if (this.nextLink !== 'projects') {
      this.router.navigate([`/about/${this.nextLink}`]);
    }
    else {
      this.router.navigate([`/experience/${this.nextLink}`]);
      this.nextPageReroutes = true;
    }
    this.navService.activeLink.next(this.nextLink);
  }

  ngOnDestroy() {
    if (this.activeLinkSub) this.activeLinkSub.unsubscribe();
    if (this.collapseSub) this.collapseSub.unsubscribe();
  }
}

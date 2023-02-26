import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  activeLink: string | null = 'introduction';
  collapseNav: boolean = false;
  navLinks: string[] = ['introduction', 'background'];
  nextLink: string | null = 'background';
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
              this.nextLink = 'work';
            }
          }
          if (this.collapseNav) {
            this.nextLink = 'work';
          }
        }
      });

    this.collapseSub = this.navService.isCollapsed
      .subscribe((collapseState: boolean) => {
        this.collapseNav = collapseState;
        if (this.collapseNav) {
          this.nextLink = 'work';
        }
        else {
          if (this.activeLink) {
            let index: number = this.navLinks.indexOf(this.activeLink);
            if (index < this.navLinks.length - 1) {
              this.nextLink = this.navLinks[index + 1];
            }
            else {
              this.nextLink = 'work';
            }
          }
        }
      });
  }

  onClickNextPage() {
    if (this.nextLink !== 'work') {
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

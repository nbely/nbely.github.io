import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit, OnDestroy {
  activeLink: string | null = null;
  isTablet: boolean = false;
  navLinks: string[] = ['introduction', 'background', 'work', 'projects', 'contact'];
  nextLink: string | null = null;
  previousLink: string | null = null;

  private activeLinkSub: Subscription | undefined;
  private navLinksSub: Subscription | undefined;

  constructor(
    private navService: NavService, 
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    const path = this.router.url.split('/');
    this.activeLink = path[path.length - 1];
    this.navService.pushNewLink(this.activeLink);

    this.activeLinkSub = this.navService.activeLink
      .subscribe((link: string) => {
        const index: number = this.navLinks.indexOf(link);
        if (index !== -1) {
          this.activeLink = link;
          this.router.navigate([`/${this.activeLink}`]);
          
          this.nextLink = index === this.navLinks.length ? null : this.navLinks[index + 1];
          this.previousLink = index === 0 ? null : this.navLinks[index - 1];
        }
      });

      this.navLinksSub = this.navService.navLinks
        .subscribe((navLinks: string[]) => {
          this.navLinks = navLinks;
      });
  }

  onClickArrowButton(link: string) {
    this.navService.pushNewLink(link);
  }

  ngOnDestroy() {
    this.activeLinkSub && this.activeLinkSub.unsubscribe();
    this.navLinksSub && this.navLinksSub.unsubscribe();
  }
}

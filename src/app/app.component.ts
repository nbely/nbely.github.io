import { Component, HostListener, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { NavService } from './nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit, OnDestroy {
  public isMenuOpen: boolean = false;
  collapseAllNav: boolean = false;
  collapseSectionNav: boolean = false;
  sideNavOpen: boolean = false;
  navLinks: string[] = [];
  activeLink: string | null = null;

  private navLinksSub: Subscription;

  constructor(private navService: NavService, private router: Router) {
    this.navLinksSub = this.navService.navLinks.subscribe(links => {
      if (links) {
        this.collapseSectionNav = false;
        this.navLinks = links;
        const path = this.router.url.split('/');
        if (path.length > 2) {
          this.activeLink = path[path.length-1];
        } else {
          this.activeLink = 'introduction';
        }
        this.navService.activeLink.next(this.activeLink);
      }
      else {
        this.collapseSectionNav = true;
      }
    });
  }
  
  ngOnInit(): void {
    if (window.innerWidth <= 719) {
      this.collapseAllNav = true;
      this.navService.isCollapsed.next(this.collapseAllNav);
    }
  }

  @HostListener('window:resize', ['$event']) 
  onResize(): void {
    if (window.innerWidth <= 719) {
      this.collapseAllNav = true;
    } else {
      this.collapseAllNav = false;
    }
    this.navService.isCollapsed.next(this.collapseAllNav);
  }

  onSidenavClick(): void {
    this.isMenuOpen = false;
    this.sideNavOpen = false;
    if (this.activeLink) {
      this.navService.pushNewLink(this.activeLink);
    }
    if (this.navLinks && !this.activeLink) {
      this.activeLink = this.navLinks[0];
      this.navService.pushNewLink(this.activeLink);
    }
  }

  onSelectRoute(link: string) {
    this.activeLink = link;
    this.navService.pushNewLink(this.activeLink);
  }

  ngOnDestroy() {
    this.navLinksSub.unsubscribe();
  }
}

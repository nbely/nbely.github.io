import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { NavService } from './nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  public isMenuOpen: boolean = false;
  collapseAllNav: boolean = false;
  collapseSectionNav: boolean = false;
  navLinks: string[] = [];
  activeLink: string | null = null;

  private navLinksSub: Subscription | undefined;
  private sidenavOpenedSub: Subscription | undefined;
  private sidenavClosedSub: Subscription | undefined ;
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav | undefined;

  constructor(private navService: NavService, private router: Router, private cdr: ChangeDetectorRef) {}
  
  ngOnInit(): void {
    this.navLinksSub = this.navService.navLinks.subscribe(links => {
      if (links) {
        this.collapseSectionNav = false;
        this.navLinks = links;
        const path = this.router.url.split('/');
        if (path.length > 2) {
          this.activeLink = path[path.length-1];
        } else {
          if (path[path.length-1] === 'about') {
            this.activeLink = 'introduction';
          } else {
            this.activeLink = 'projects';
          }
        }
        this.navService.activeLink.next(this.activeLink);
      }
      else {
        this.collapseSectionNav = true;
      }
      this.cdr.detectChanges();
    });

    if (window.innerWidth < 720) {
      this.collapseAllNav = true;
      this.navService.isCollapsed.next(this.collapseAllNav);
    }
  }

  ngAfterViewInit(): void {
    if (this.sidenav) {
      this.sidenavOpenedSub = this.sidenav.openedStart.subscribe(() => {
        this.isMenuOpen = true;
      })
      this.sidenavClosedSub = this.sidenav.closedStart.subscribe(() => {
        this.isMenuOpen = false;
      })
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
    if (this.activeLink) {
      this.navService.pushNewLink(this.activeLink);
    }
    if (this.navLinks && !this.activeLink) {
      this.activeLink = this.navLinks[0];
      this.navService.pushNewLink(this.activeLink);
    }
  }

  onSelectRoute(link: string): void {
    this.activeLink = link;
    this.navService.pushNewLink(this.activeLink);
  }

  ngOnDestroy(): void {
    if (this.navLinksSub) this.navLinksSub.unsubscribe();
    if (this.sidenavOpenedSub) this.sidenavOpenedSub.unsubscribe();
    if (this.sidenavClosedSub) this.sidenavClosedSub.unsubscribe();
  }
}

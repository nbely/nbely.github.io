import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { NavService } from './services/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  public isMenuOpen: boolean = false;
  activeLink: string | null = null;
  isTablet: boolean = true;
  navLinks: string[] = [];

  private activeLinkSub: Subscription | undefined;
  private navLinksSub: Subscription | undefined;
  private sidenavClosedSub: Subscription | undefined ;
  private sidenavOpenedSub: Subscription | undefined;
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav | undefined;

  constructor(private navService: NavService, private router: Router, private cdr: ChangeDetectorRef) {}
  
  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        document.querySelector('.mat-sidenav-content')!.scrollTop = 0;
      })

    this.navLinksSub = this.navService.navLinks.subscribe(navLinks => {
      this.navLinks = navLinks;
      this.cdr.detectChanges();
    });

    this.activeLinkSub = this.navService.activeLink.subscribe(link => {
      this.activeLink = link;
      this.cdr.detectChanges();
    })

    if (window.innerWidth < 992) {
      this.isTablet = true;
      this.navService.isTablet.next(this.isTablet);
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
    const initialTabletState = this.isTablet;
    this.isTablet = window.innerWidth < 992 ? true : false;
    if (this.isTablet !== initialTabletState) {
      this.navService.isTablet.next(this.isTablet);
      this.navService.updateNavLinks();
    }
  }

  onSidenavClick(): void {
    this.isMenuOpen = false;
  }

  onSelectRoute(link: string): void {
    this.activeLink = link;
    this.navService.pushNewLink(this.activeLink);
  }

  ngOnDestroy(): void {
    this.navLinksSub && this.navLinksSub.unsubscribe();
    this.activeLinkSub && this.activeLinkSub.unsubscribe();
    this.sidenavOpenedSub && this.sidenavOpenedSub.unsubscribe();
    this.sidenavClosedSub && this.sidenavClosedSub.unsubscribe();
  }
}

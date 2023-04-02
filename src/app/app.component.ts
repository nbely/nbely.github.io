import { AfterViewInit, Component, HostListener, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
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
  deviceType: string = "mobile";
  navLinks: string[] = [];

  private activeLinkSub: Subscription | undefined;
  private navLinksSub: Subscription | undefined;
  private sidenavClosedSub: Subscription | undefined ;
  private sidenavOpenedSub: Subscription | undefined;
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav | undefined;

  constructor(private navService: NavService, private router: Router) {}
  
  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        document.querySelector('.mat-sidenav-content')!.scrollTop = 0;
      })

    this.navLinksSub = this.navService.navLinks.subscribe(navLinks => {
      this.navLinks = navLinks;
    });

    this.activeLinkSub = this.navService.activeLink.subscribe(link => {
      this.activeLink = link;
    })

    this.setDeviceType();
  }

  ngAfterViewInit(): void {
    if (this.sidenav) {
      this.sidenavClosedSub = this.sidenav.closedStart.subscribe(() => {
        this.isMenuOpen = false;
      })
      this.sidenavOpenedSub = this.sidenav.openedStart.subscribe(() => {
        this.isMenuOpen = true;
      })
    }
  }

  setDeviceType(): void {
    const initialDeviceType: string = this.deviceType;
    if (window.innerWidth > 992) {
      this.deviceType = "desktop"; 
    } else if (window.innerWidth > 576) {
      this.deviceType = "tablet";
    } else {
      this.deviceType = "mobile";
    }
    if (this.deviceType !== initialDeviceType) {
      this.navService.deviceType.next(this.deviceType);
    }
  }

  @HostListener('window:resize', ['$event']) 
  onResize(): void {
    const initialDeviceType: string = this.deviceType;
    this.setDeviceType();
    if (this.deviceType !== initialDeviceType) {
      this.navService.updateNavLinks();
    }
  }

  onSelectRoute(link: string): void {
    this.activeLink = link;
    this.navService.pushNewLink(this.activeLink);
  }

  onSidenavClick(link: string): void {
    this.isMenuOpen = false;
    this.onSelectRoute(link);
  }

  ngOnDestroy(): void {
    this.activeLinkSub && this.activeLinkSub.unsubscribe();
    this.navLinksSub && this.navLinksSub.unsubscribe();
    this.sidenavClosedSub && this.sidenavClosedSub.unsubscribe();
    this.sidenavOpenedSub && this.sidenavOpenedSub.unsubscribe();
  }
}

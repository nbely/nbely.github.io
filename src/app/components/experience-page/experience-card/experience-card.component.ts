import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { ExperienceCardModel } from 'src/app/models/exerience-card.model';
import { ExperienceDialogComponent } from './experience-dialog/experience-dialog.component';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.html',
  styleUrls: ['./experience-card.scss']
})
export class ExperienceCardComponent implements OnInit, OnDestroy {
    @Input() card: ExperienceCardModel = {} as ExperienceCardModel;
    deviceType: string = "mobile";
    isCollapsed: boolean = true;

    private deviceTypeSub: Subscription | undefined;

    constructor(
      private navService: NavService,
      public dialog: MatDialog
    ) {}

    ngOnInit(): void {
      this.deviceTypeSub = this.navService.deviceType
      .subscribe((deviceType: string) => {
        this.deviceType = deviceType;
    });
    }

    onButtonClick(e: Event, link: string) {
      e.stopPropagation();
      window.open(link, '_blank');  
    }

    openDialog(card: ExperienceCardModel, enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(ExperienceDialogComponent, {
          data: {
            card
          },
          enterAnimationDuration,
          exitAnimationDuration,
        });
    }

    toggleCardCollapseState(e: Event) {
      e.stopPropagation();
      this.isCollapsed = !this.isCollapsed;

    }

    ngOnDestroy(): void {
        this.deviceTypeSub?.unsubscribe();
    }
}
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ExperienceCardModel } from 'src/app/models/exerience-card.model';
import { ExperienceDialogComponent } from './experience-dialog/experience-dialog.component';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.html',
  styleUrls: ['./experience-page.scss']
})
export class ExperiencePageComponent {
    @Input() headerText: string = "Experience";
    @Input() experienceCards: ExperienceCardModel[] = [];

    constructor(public dialog: MatDialog) {}

    onButtonClick(link: string) {
        window.open(link, '_blank');
    }

    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(ExperienceDialogComponent, {
          width: '250px',
          enterAnimationDuration,
          exitAnimationDuration,
        });
    }
}
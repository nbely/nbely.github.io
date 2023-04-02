import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ExperienceCardModel } from 'src/app/models/exerience-card.model';

@Component({
    selector: 'app-experience-dialog',
    templateUrl: 'experience-dialog.html',
    styleUrls: ['./experience-dialog.scss']
  })
export class ExperienceDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {card: ExperienceCardModel}, public dialog: MatDialog, public dialogRef: MatDialogRef<ExperienceDialogComponent>) {}
}
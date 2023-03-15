import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-experience-dialog',
    templateUrl: 'experience-dialog.html',
  })
export class ExperienceDialogComponent {
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<ExperienceDialogComponent>) {}
}
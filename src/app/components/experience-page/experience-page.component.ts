import { Component, Input } from '@angular/core';

import { ExperienceCardModel } from 'src/app/models/exerience-card.model';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.html',
  styleUrls: ['./experience-page.scss']
})
export class ExperiencePageComponent {
    @Input() headerText: string = "Experience";
    @Input() experienceCards: ExperienceCardModel[] = [] as ExperienceCardModel[];
}
import { Component } from '@angular/core';

import { ExperienceCardModel } from 'src/app/models/exerience-card.model';
import { workExperienceCards } from 'src/app/data/experience-cards.data';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html'
})
export class WorkComponent {
  workExperienceCards: ExperienceCardModel[] = workExperienceCards;
}

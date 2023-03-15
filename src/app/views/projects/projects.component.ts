import { Component } from '@angular/core';

import { ExperienceCardModel } from 'src/app/models/exerience-card.model';
import { projectExperienceCards } from 'src/app/data/experience-cards.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projectExperienceCards: ExperienceCardModel[] = projectExperienceCards;
}

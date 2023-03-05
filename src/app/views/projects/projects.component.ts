import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  constructor() { }

  onButtonClick(link: string) {
    window.open(link, '_blank');
  }
}

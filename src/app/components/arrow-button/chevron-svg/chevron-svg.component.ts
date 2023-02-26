import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chevron-svg',
  templateUrl: './chevron-svg.component.html',
  styleUrls: ['./chevron-svg.component.scss']
})
export class ChevronSVGComponent {
  @Input() direction: string | null = "right";
}

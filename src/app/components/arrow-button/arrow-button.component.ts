import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-button',
  templateUrl: './arrow-button.component.html',
  styleUrls: ['./arrow-button.component.scss']
})
export class ArrowButtonComponent {
  @Input() text: string | null = "";

  constructor() { 
    // Empty Constructor
}
}

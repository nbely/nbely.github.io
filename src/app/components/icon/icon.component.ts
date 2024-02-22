import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() height: string | undefined = '';
  @Input() margin: string | undefined = '';
  @Input() icon: string | undefined = '';
  @Input() showLabel: boolean | undefined = false;
  @Input() width: string | undefined = '';
}

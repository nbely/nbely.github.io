import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-group',
  templateUrl: './icon-group.component.html',
  styleUrls: ['./icon-group.component.scss']
})
export class IconGroupComponent {
  @Input() iconList: string[] | null = [""];
}

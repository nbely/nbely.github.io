import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onButtonClick(link: string) {
    window.open(link, '_blank');
  }
}

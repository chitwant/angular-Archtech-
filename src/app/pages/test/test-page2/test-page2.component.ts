import { Component, OnInit } from '@angular/core';
import { slideLeft } from 'src/app/shared/animations/slideLeft';

@Component({
  selector: 'app-test-page2',
  templateUrl: './test-page2.component.html',
  styleUrls: ['./test-page2.component.scss'],
  animations: [
    slideLeft
  ]
})
export class TestPage2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

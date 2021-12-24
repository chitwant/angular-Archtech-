import { Component, OnInit } from '@angular/core';
import { slideLeft } from 'src/app/shared/animations/slideLeft';

@Component({
  selector: 'app-test-page3',
  templateUrl: './test-page3.component.html',
  styleUrls: ['./test-page3.component.scss'],
  animations: [
    slideLeft
  ]
})
export class TestPage3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

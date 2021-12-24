import { Component, OnInit } from '@angular/core';
import { slideLeft } from 'src/app/shared/animations/slideLeft';

@Component({
  selector: 'app-test-page1',
  templateUrl: './test-page1.component.html',
  styleUrls: ['./test-page1.component.scss'],
  animations: [
    slideLeft
  ]
})
export class TestPage1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

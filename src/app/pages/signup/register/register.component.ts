import { Component, OnInit } from '@angular/core';
import { slideLeft } from 'src/app/shared/animations/slideLeft';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    slideLeft
  ]
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

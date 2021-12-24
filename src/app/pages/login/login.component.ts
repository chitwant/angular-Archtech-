import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { slideLeft } from 'src/app/shared/animations/slideLeft';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    slideLeft
  ]
})
export class LoginComponent implements OnInit {


  longText = 'hi';

  constructor() { }

  ngOnInit(): void {
  }

}

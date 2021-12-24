import { Component, OnInit } from '@angular/core';
import { slideLeft } from 'src/app/shared/animations/slideLeft';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss'],
  animations: [
    slideLeft
  ]
})
export class VerificationCodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

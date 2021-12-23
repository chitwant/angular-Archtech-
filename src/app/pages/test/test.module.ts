import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestPage1Component } from './test-page1/test-page1.component';
import { TestPage2Component } from './test-page2/test-page2.component';
import { TestPage3Component } from './test-page3/test-page3.component';


@NgModule({
  declarations: [
    TestPage1Component,
    TestPage2Component,
    TestPage3Component
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }

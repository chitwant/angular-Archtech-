import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPage1Component } from './test-page1/test-page1.component';
import { TestPage2Component } from './test-page2/test-page2.component';
import { TestPage3Component } from './test-page3/test-page3.component';

const routes: Routes = [
  {
    path: 'page-1',
    component: TestPage1Component
  },
  {
    path: 'page-2',
    component: TestPage2Component
  },
  {
    path: 'page-3',
    component: TestPage3Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }

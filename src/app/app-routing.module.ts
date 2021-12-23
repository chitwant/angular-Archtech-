import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutBackendComponent } from './shared/component/layout/backend/layout-backend/layout-backend.component';
import { LayoutFrontendComponent } from './shared/component/layout/frontend/layout-frontend/layout-frontend.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: LayoutBackendComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'test',
        loadChildren: () => import('./pages/test/test.module').then((m) => m.TestModule)
      },
    ]
  },
  {
    path: '',
    component: LayoutFrontendComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('./pages/signup/signup.module').then((m) => m.SignupModule)
      }
    ]
  },
  
  {
	  path: '**',
	  component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

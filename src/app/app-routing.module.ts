import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutBackendComponent } from './layout/backend/layout-backend/layout-backend.component';
import { LayoutFrontendComponent } from './layout/frontend/layout-frontend/layout-frontend.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: LayoutBackendComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
      }
    ]
  },
  {
    path: 'login',
    component: LayoutFrontendComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule)
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

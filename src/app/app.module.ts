import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FrontendFooterComponent } from './shared/component/frontend/frontend-footer/frontend-footer.component';
import { FrontendHeaderComponent } from './shared/component/frontend/frontend-header/frontend-header.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { LayoutBackendComponent } from './shared/component/layout/backend/layout-backend/layout-backend.component';
import { LayoutFrontendComponent } from './shared/component/layout/frontend/layout-frontend/layout-frontend.component';
import { MaterialModule } from './shared/modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    FrontendFooterComponent,
    FrontendHeaderComponent,
    NotFoundComponent,
    LayoutBackendComponent,
    LayoutFrontendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

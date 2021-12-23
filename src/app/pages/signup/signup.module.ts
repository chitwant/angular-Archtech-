import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { RegisterComponent } from './register/register.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';


@NgModule({
  declarations: [
    RegisterComponent,
    VerificationCodeComponent,
    CreatePasswordComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    MaterialModule
  ]
})
export class SignupModule { }

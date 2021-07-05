import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';
import { SignUpPage } from './sign-up.page';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { AuthService } from 'src/app/services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SignUpPage, RegisterFormComponent],
  exports: [RegisterFormComponent],
  providers: [AuthService]
})
export class SignUpPageModule {}

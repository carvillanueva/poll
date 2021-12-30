import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { AuthenticationComponent } from './authentication/authentication.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    AuthenticationComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule { }

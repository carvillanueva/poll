import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginPageComponent,
    AuthenticationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule { }

import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBarModule, MatSnackBar } from '@angular/material';

@Component({
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authService : AuthService, private sankBar : MatSnackBar){}

  onLogin(form:  NgForm){
    if(form.invalid){
      this.sankBar.open("Por favor introduce datos válidos", 'Close');
      return;

    }
    this.sankBar.open("Iniciando sesión... Espere por favor ", 'Close');
    this.authService.login(form.value.email,form.value.password);
  };

};

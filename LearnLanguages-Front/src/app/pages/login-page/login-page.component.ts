import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


export class AppModule { }
@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

constructor(private formConstructor: FormBuilder) { }

  loginForm = this.formConstructor.group({
    username: [''],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })

  onSubmit() {
    console.log(this.loginForm)
  }
}
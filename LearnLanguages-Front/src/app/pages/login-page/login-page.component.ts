import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export class AppModule {}
@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(private formConstructor: FormBuilder) {}

  loginForm = this.formConstructor.group({
    username: [''],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  onSubmit() {
    console.log(this.loginForm);
  }

  getRandomPosition(): object {
    const top = `${80 + Math.random() * 60}%`;
    const left = `${20 + Math.random() * 60}%`;

    const zIndex = -1;
    const margin = `${Math.random() * 20}px`;

    return { margin, top, left, zIndex, position: 'absolute' };
  }
}

import { Component } from '@angular/core';


export class AppModule { }
@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  username: string;
  password: string;

  onSubmit() {
    
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    
  }
}

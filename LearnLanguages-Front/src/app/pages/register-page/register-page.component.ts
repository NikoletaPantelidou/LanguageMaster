import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  constructor(private formConstructor: FormBuilder) { }

  registerForm = this.formConstructor.group({
    username: [''],
    email: [''],
    phoneNumber:[''],
    password: ['', [Validators.required, Validators.minLength(8)]],
    repeatPassword: ['']
  })

  onSubmit() {
      if (this.registerForm.valid) {
        // Perform the registration process here
        // You can send the form data to a server or handle it locally
        console.log('Registration successful:', this.registerForm.value);
      } else {
        // Form is invalid, show an error message or validation errors
        console.log('Form is invalid. Please check the fields.');
      }
    }
    

}

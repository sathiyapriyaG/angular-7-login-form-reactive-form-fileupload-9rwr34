import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  loginForm: FormGroup;
  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      file: new FormControl('')
    });
  }

  onChange(event) {
    console.log(event);
  }

  onSubmit() {
    if(this.loginForm.valid) {
      console.log(this._v());
    }
  }
  _v() {
    return this.loginForm.value;
  }
}

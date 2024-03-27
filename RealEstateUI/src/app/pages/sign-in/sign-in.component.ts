import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
  @Input() Username: string | undefined;
  @Input() Password: string | undefined;
  ngOnInit(): void {
    this.readyLoginForm();
  }
  constructor(private fb: FormBuilder){}

  readyLoginForm() {
    this.loginForm = this.fb.group({
      username: new FormControl(this.Username, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(this.Password, [Validators.required]),
    });
  }
}

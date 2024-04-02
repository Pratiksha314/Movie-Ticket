import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PeopleStore } from 'src/app/person.store';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidToLogin: boolean;
  constructor(private service: PeopleService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    this.service.isPersonAuthenticated(this.loginForm.value.username);
    this.service.personAuthenticated ? this.router.navigate(['home']) : this.invalidToLogin = true;
  }
}
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  passwordNotMatching: boolean = false;

  constructor(private service: PeopleService) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  signup() {
    const userData = {
      username: this.signupForm.value.username,
      password: this.signupForm.value.password,
      type: 'user',
      favouriteMoviesId: [],
      purchasedMovies: []
    }

    if (this.signupForm.value.password === this.signupForm.value.confirmPassword && !this.signupForm.invalid) {
      this.service.addUser(userData);
    }
    else this.passwordNotMatching = true;
  }
}

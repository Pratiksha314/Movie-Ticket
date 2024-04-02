import { Injectable } from '@angular/core';
import { people } from '../models/people';
import { PeopleStore } from '../person.store';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private store: PeopleStore, private router: Router) { }

  personDetails: any;
  personAuthenticated: boolean;

  getPersonDetails(username: string) {
    people.forEach((data) => {
      if (data.username === username) {
        this.personDetails = data;
        this.store.addPersonType(data.type);
      }
    });
    console.log(this.personDetails);
    this.store.personData$.subscribe((data) => {
      console.log(data);
    });
  }

  isPersonAuthenticated(username: string) {
    this.personAuthenticated = people.find(id => id.username === username) ? true : false;
    console.log(this.personAuthenticated);
    this.personAuthenticated === true ? this.getPersonDetails(username) : null;
  }

  logoutPerson() {
    this.personAuthenticated = false;
    this.store.addPersonType('');
    this.router.navigate(['login']);
  }

  addUser(userDetails: any) {
    people.push(userDetails);
    this.router.navigate(['login']);
  }
}
import { Component } from '@angular/core';
import { PeopleStore } from 'src/app/person.store';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  personType: string;

  constructor(private store: PeopleStore, private service: PeopleService) {
    this.store.personData$.subscribe((data) => {
      this.personType = data;
    });
  }

  logout() {
    this.service.logoutPerson();
  }
}

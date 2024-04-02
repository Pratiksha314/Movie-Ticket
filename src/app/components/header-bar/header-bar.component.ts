import { Component } from '@angular/core';
import { PeopleStore } from 'src/app/person.store';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent {
  personType: string;

  constructor(private store: PeopleStore) {
    this.store.personData$.subscribe((data) => {
      this.personType = data;
    });
  }
}

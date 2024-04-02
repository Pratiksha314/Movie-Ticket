import { Component } from '@angular/core';
import { people } from 'src/app/models/people';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent {
  peopleList = people;
}

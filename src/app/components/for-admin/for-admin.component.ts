import { Component } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-for-admin',
  templateUrl: './for-admin.component.html',
  styleUrls: ['./for-admin.component.scss']
})

export class ForAdminComponent {
  personData: any;

  constructor(private service: PeopleService) {
    this.personData = this.service.personDetails;
  }
}

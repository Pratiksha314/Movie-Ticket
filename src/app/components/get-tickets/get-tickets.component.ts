import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleStore } from 'src/app/person.store';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-get-tickets',
  templateUrl: './get-tickets.component.html',
  styleUrls: ['./get-tickets.component.scss']
})
export class GetTicketsComponent implements OnInit {

  @ViewChild('templateForm') form: NgForm;
  personType: string;

  constructor(private route: ActivatedRoute, private service: MoviesService, private router: Router, private store: PeopleStore) {
    this.store.personData$.subscribe((data) => {
      this.personType = data;
    });
  }

  movieDetails: any = {};
  selectedIndex: number = -1;

  adultTicketAmount: any = 0;
  under18TicketAmount: any = 0;

  numberTicketsSelection = [0, 1, 2, 3, 4, 5];
  adultTicketSelection: any = 0;
  under18TicketSelection: any = 0;
  seatsNumber: any[];

  addPurchasedTicketInformation: any = {
    id: '',
    details: {
      numberOfTickets: 0,
      date: '',
      time: '',
      price: 0,
      seatInfo: {
        hall: String.fromCharCode(65 + Math.floor(Math.random() * 11)),
        row: String(Math.floor(Math.random() * 10) + 1),
        seat: [],
        ticketNumber: String(Math.floor(Math.random() * 10000000000)),
      }
    }
  };

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.movieDetails = JSON.parse(params['movieInformation']);
      this.adultTicketAmount = this.movieDetails.prices.adult;
      this.under18TicketAmount = this.movieDetails.prices['under 18'];
      this.addPurchasedTicketInformation.id = this.movieDetails.id;
    });
  }

  timingSelection(buttonIndex: number, time: string) {
    this.selectedIndex = buttonIndex;
    this.addPurchasedTicketInformation.details.time = time;
  }

  commonFunction() {
    this.addPurchasedTicketInformation.details.price = 0;
    this.addPurchasedTicketInformation.details.price = (this.adultTicketAmount * this.adultTicketSelection) + (this.under18TicketAmount * this.under18TicketSelection);
    this.addPurchasedTicketInformation.details.numberOfTickets = 0;
    this.addPurchasedTicketInformation.details.seatInfo.seat = [];
    this.addPurchasedTicketInformation.details.numberOfTickets = this.adultTicketSelection + this.under18TicketSelection;

    for (let i = 0; i < this.addPurchasedTicketInformation.details.numberOfTickets; i++) {
      this.addPurchasedTicketInformation.details.seatInfo.seat.push(Math.floor(Math.random() * 90) + 1);
    }

  }
  onAdultSelectionChange($event: any) {
    this.adultTicketSelection = this.numberTicketsSelection[$event.target.value];
    this.commonFunction();
  }

  onUnder18SelectionChange($event: any) {
    this.under18TicketSelection = this.numberTicketsSelection[$event.target.value];
    this.commonFunction();
  }

  buyTickets() {
    this.addPurchasedTicketInformation.details.date = this.form.value.date;
    this.service.purchasedTicket(this.addPurchasedTicketInformation);
    this.router.navigate(['purchased'])
    console.log(this.addPurchasedTicketInformation);
  }


}

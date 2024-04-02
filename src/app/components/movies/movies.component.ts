import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleStore } from 'src/app/person.store';
import { MoviesService } from 'src/app/services/movies.service';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  @Input() moviesList: any[] = [];

  favourite: boolean = false;
  personType: string;
  showLoginDialog: boolean = false;

  constructor(private service: MoviesService, private router: Router, private store: PeopleStore, private userService: PeopleService) {
    this.store.personData$.subscribe((data) => {
      this.personType = data;
    });

  }

  tickets(movie: any) {
    this.personType !== '' ?
      this.service.getTickets(movie) : this.showLoginDialog = true;
  }

  addFavourite(id: any) {
    this.service.addToFavouriteMovies(id);
  }

  removeFavourite(id: any) {
    this.service.removeFromFavouriteMovies(id);
    console.log(id);
  }

  editMovie(id: any) {
    this.router.navigate(['edit-movie'], {
      queryParams: {
        movieId: id
      }
    })
  }

  deleteMovie(id: any, movieArray: any[]) {
    this.service.deleteMovie(id, movieArray);
  }

}

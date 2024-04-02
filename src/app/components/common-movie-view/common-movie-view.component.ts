import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleStore } from 'src/app/person.store';
import { MoviesService } from 'src/app/services/movies.service';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-common-movie-view',
  templateUrl: './common-movie-view.component.html',
  styleUrls: ['../movies/movies.component.scss', './common-movie-view.component.scss']
})
export class CommonMovieViewComponent {
  @Input() moviesDataList: any[];
  personType: string;
  showLoginDialog: boolean = false;
  starIconShow: boolean;

  constructor(private service: MoviesService, private router: Router, private store: PeopleStore, private userService: PeopleService) {
    this.store.personData$.subscribe((data) => {
      this.personType = data;
    });
  }

  ngOnInit() {
    console.log(this.moviesDataList);
    this.moviesDataList.forEach((movie) => {
      this.userService.personDetails.favouriteMoviesId.forEach((favId) => {
        if (favId === movie.id) {
          this.starIconShow = true;
        }
        else if (favId !== movie.id) {
          this.starIconShow = false;
        }
      });
    })
  }

  tickets(movie: any) {
    this.personType !== '' ?
      this.service.getTickets(movie) : this.showLoginDialog = true;
  }

  favourite(id: any) {
    this.service.addToFavouriteMovies(id);
  }

  removeFromFavourite(id: any) {
    this.service.removeFromFavouriteMovies(id);
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

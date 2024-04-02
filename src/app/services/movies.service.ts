import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { movies } from '../models/movies';
import { PeopleService } from './people.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  userDetails: any;
  constructor(private router: Router, private user: PeopleService) {
  }
  movieDetails: any;

  getTickets(movieData: any) {
    this.router.navigate(['get-ticket'], {
      queryParams: {
        movieInformation: JSON.stringify(movieData)
      }, skipLocationChange: true
    })
  }

  getMovieDetailsById(id: any) {
    movies.forEach((movie) => {
      if (movie.id == id) {
        this.movieDetails = movie;
      }
    });
    return this.movieDetails;
  }

  addToFavouriteMovies(movieId: any) {
    this.userDetails = this.user.personDetails;
    this.userDetails.favouriteMoviesId.push(movieId);
  }

  removeFromFavouriteMovies(movieId: any) {
    this.userDetails = this.user.personDetails;
    const index = this.userDetails.favouriteMoviesId.indexOf(movieId);
    this.userDetails.favouriteMoviesId.splice(index, 1);
  }

  purchasedTicket(buyTicketsInfo: any) {
    this.userDetails = this.user.personDetails;
    this.userDetails.purchasedMovies.push(buyTicketsInfo);
  }

  deleteMovie(id: any, movieArray: any[]) {
    const index = movieArray.indexOf(movieArray.find(obj => obj.id === id));
    movieArray.splice(index, 1);
  }

  getMoviesLength() {
    return movies.length;
  }

  addMovie(movieData: any) {
    movies.push(movieData);
    this.router.navigate(['/home']);
  }

  editMovie(movie: any) {
    movies[movie.id - 1] = movie;
    this.router.navigate(['/home']);
  }
}



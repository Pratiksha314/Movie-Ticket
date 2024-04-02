import { Component, OnInit } from '@angular/core';
import { upcomingMoviesList } from 'src/app/models/movies';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
})
export class UpcomingMoviesComponent implements OnInit{
  moviesInfo : any[] = upcomingMoviesList;

  ngOnInit() {
      console.log("movies list : ", this.moviesInfo);
  }
}


import { Component } from '@angular/core';
import { movies } from 'src/app/models/movies';

@Component({
  selector: 'app-view-all-upcoming-movies',
  templateUrl: './view-all-upcoming-movies.component.html',
  styleUrls: ['../../movies/movies.component.scss']
})
export class ViewAllUpcomingMoviesComponent {
  upcomingMovies: any[] = movies.slice().reverse();
}

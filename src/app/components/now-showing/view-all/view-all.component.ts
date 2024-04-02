import { Component } from '@angular/core';
import { movies } from 'src/app/models/movies';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: [ '../../movies/movies.component.scss']
})
export class ViewAllComponent{

  showingMovies: any [] = movies;

}

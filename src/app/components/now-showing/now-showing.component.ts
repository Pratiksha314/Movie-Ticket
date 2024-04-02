import { Component } from '@angular/core';
import { nowShowingMoviesList } from 'src/app/models/movies';

@Component({
  selector: 'app-now-showing',
  templateUrl: './now-showing.component.html',
})
export class NowShowingComponent {
  moviesInfo: any[] = nowShowingMoviesList;
}
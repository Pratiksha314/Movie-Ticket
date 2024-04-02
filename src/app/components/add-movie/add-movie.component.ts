import { Component } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
})
export class AddMovieComponent {
  movieDetails = {
    id: '',
    poster: '',
    prices: {
      adult: '',
      'under 18': '',
    },
    runTime: '',
    timings: ['', '', ''],
    title: '',
    year: '',

  }
}

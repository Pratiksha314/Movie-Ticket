import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['../get-tickets/get-tickets.component.scss', './movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {

  movieForm: FormGroup;
  @Input() header: string;
  @Input() movieEditDetails: any = {};
  @Input() btnName: string = '';

  id: string;

  constructor(private service: MoviesService) { }

  ngOnInit() {
    this.movieForm = new FormGroup({
      id: new FormControl((String(this.btnName === 'Add Movie' ? this.service.getMoviesLength() + 1 : this.movieEditDetails.id))),
      title: new FormControl(this.movieEditDetails.title, [
        Validators.required
      ]),
      year: new FormControl(this.movieEditDetails.year, [
        Validators.required
      ]
      ),
      runTime: new FormControl(
        this.movieEditDetails.runTime, [
        Validators.required
      ]
      ),
      timings: new FormArray([
        new FormControl(this.movieEditDetails.timings[0], [
          Validators.required
        ]),
        new FormControl(this.movieEditDetails.timings[1], [
          Validators.required
        ]),
        new FormControl(this.movieEditDetails.timings[2], [
          Validators.required
        ]),
      ]),
      prices:
        new FormGroup({
          'adult': new FormControl(this.movieEditDetails.prices.adult, [
            Validators.required
          ]),
          'under 18': new FormControl(this.movieEditDetails.prices['under 18'], [
            Validators.required
          ]),
        }),
      poster: new FormControl(this.movieEditDetails.poster, [
        Validators.required
      ])
    })
  }

  submitForm() {
    this.btnName === 'Add Movie' ? this.service.addMovie(this.movieForm.value) : this.service.editMovie(this.movieForm.value);
    console.log(this.movieForm.value);
  }
}

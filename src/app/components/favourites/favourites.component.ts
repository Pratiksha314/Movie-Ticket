import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['../movies/movies.component.scss', '../now-showing/view-all/view-all.component.scss', './favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  favouriteMoviesList: any[] = [];

  constructor(private service: MoviesService, private person: PeopleService) {
    this.person.personDetails.favouriteMoviesId.forEach((id) => {
      this.favouriteMoviesList.push(this.service.getMovieDetailsById(id));
    })
  }
  ngOnInit() {
    console.log(this.favouriteMoviesList);
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
})
export class EditMovieComponent implements OnInit{
  constructor(private route: ActivatedRoute, private service: MoviesService){}

  movieDetails: any = {};

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      this.movieDetails = this.service.getMovieDetailsById(params['movieId']);
    });
  }
}

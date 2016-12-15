import { Component, OnInit } from '@angular/core';
import { MoviesService } from "../movies.service";
import { Movie } from './movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies : Movie[];

  constructor(private service : MoviesService) {  }

  ngOnInit() {}

  ngDoCheck() {
    this.movies = this.service.movies;
  }
}

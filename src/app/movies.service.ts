import { Injectable } from '@angular/core';
import { Movie } from "./movies/movie";
import { Observable } from 'rxjs/Observable'
import {Http, Response} from "@angular/http";

@Injectable()
export class MoviesService {

  movies : Movie[];

  constructor(private http : Http) {

  }

  search(keyword : string) {
    this.getMovies(keyword).subscribe(
      res => this.movies = res,
      err => console.log(err)
    );
  }

  getMovies(keyword : string) : Observable<Movie[]> {
    return this.http
      .get("http://www.omdbapi.com/?s="+keyword)
      .map(this.parseResponse)
      .catch(() => Observable.throw("Algo salió mal"))
  }

  parseResponse(response: Response) : Movie[] {
    if (!response.json() || !response.json().Search) return [];

    return response.json().Search.map(
      jsonMovie => new Movie(jsonMovie['Title'],
                             jsonMovie['imdbID'],
                             jsonMovie['Year'],
                             jsonMovie['Type'])
    );
  }
}

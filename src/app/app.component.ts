import { Component } from '@angular/core';
import { MoviesService } from "./movies.service";

import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Buscador de Peliculas!';

  constructor(private service : MoviesService) { }

  agregarPelicula() {
    this.service.movies.push({
      title: "Letal Weapon",
      id: "4"
    });
  }
}

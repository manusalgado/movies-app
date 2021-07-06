import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviePayload } from './entities/dashboard';

import { MoviesFacade } from './movies.facade';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private facade: MoviesFacade) { }

  ngOnInit() {
    this.fetchMovies();
  }

  get movies$(): Observable<MoviePayload[]> {
    return this.facade.movies$;
  }

  public fetchMovies(): void {
    this.facade.getMovies();
  }

}

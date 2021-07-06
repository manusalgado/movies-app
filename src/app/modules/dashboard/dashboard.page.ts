import { Component, OnInit } from '@angular/core';

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

  public fetchMovies(): void {
    this.facade.getMovies();
  }

}

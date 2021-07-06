import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { MoviePayload } from '../entities/dashboard';
import { MoviesFacade } from '../movies.facade';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.page.html',
  styleUrls: ['./content-detail.page.scss'],
})
export class ContentDetailPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private facade: MoviesFacade
  ) { }

  ngOnInit() {
    this.init();
  }

  get movie$(): Observable<MoviePayload> {
    return this.facade.movie$;
  }

  public fetchMovie(movieId: number): void {
    this.facade.getMovie(movieId);
  }

  public init(): void {
    this.route.params.subscribe((param) => {
      if (param) {
        const {movieId} = param;
        this.fetchMovie(+movieId);
      }
    }).unsubscribe();
  }

}

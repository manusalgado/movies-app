import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MoviePayload } from './entities/dashboard';
import { MovieActions } from './store/actions/movies.actions';
import { DashboardState } from './store/state/dashboard.state';
import { selectAllMovies, selectMovie } from './store/selectors/movies.selectors';


@Injectable()
export class MoviesFacade {

  constructor (
    private store: Store<DashboardState>
  ) { }

  public movies$: Observable<MoviePayload[]> = this.store.pipe(
    select(selectAllMovies)
  );

  public movie$: Observable<MoviePayload> = this.store.pipe(
    select(selectMovie)
  );

  public getMovies(): void {
    this.store.dispatch(MovieActions.getMoviesAction());
  }

  public getMovie(movieId: number): void {
    this.store.dispatch(MovieActions.getMovieAction({movieId}));
  }

}
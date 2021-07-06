import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, EMPTY, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { exhaustMap, map, catchError } from 'rxjs/operators';

import { MovieActions } from '../actions/movies.actions';
import { MoviesService } from '../../services/movies.service';

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private service: MoviesService
  ) { }

  movies$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
      ofType(MovieActions.getMoviesAction),
      exhaustMap(() => this.service.movies()
      .pipe(
        map((movies) => {
          return MovieActions.getMoviesSuccessAction({movies});
        }),
        catchError((err) => of(MovieActions.getMoviesFailureAction({error: 'Error'})))
      ))
    ));

  movie$: Observable<Action> = createEffect(() => this.actions$
  .pipe(
    ofType(MovieActions.getMovieAction),
    exhaustMap(({movieId}) => this.service.movie()
    .pipe(
      map((movies) => {
        const movie = movies.filter(data => data.id === movieId)[0];
        return MovieActions.getMovieSuccessAction({movie});
      }),
      catchError((err) => of(MovieActions.getMovieFailureAction({error: 'Error'})))
    ))
  ));

}
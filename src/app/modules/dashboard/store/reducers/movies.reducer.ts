import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { MovieActions } from '../actions/movies.actions';
import { MoviePayload } from '../../entities/dashboard';


export interface MoviesState extends EntityState<MoviePayload> { }

export function getMovieId(movie: MoviePayload): number {
  return movie.id;
}

export const moviesAdapter: EntityAdapter<MoviePayload> = createEntityAdapter<MoviePayload>({
  selectId: getMovieId
});

export const initialState: MoviesState = moviesAdapter.getInitialState({});

const reducer = createReducer(
  initialState,
  on(MovieActions.getMoviesSuccessAction, (state, {movies}) => {
    return moviesAdapter.setAll(movies, state)
  })
);

export function moviesReducer(state: MoviesState, action: Action): MoviesState {
  return reducer(state, action);
}

export const {
  selectAll,
  selectIds,
  selectEntities,
  selectTotal
} = moviesAdapter.getSelectors();
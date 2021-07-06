import { combineReducers } from '@ngrx/store';

import { moviesReducer as movies } from './movies.reducer';
import { movieReducer as movie } from './movie.reducer';

export const MoviesRootReducer = combineReducers({
  movies,
  movie
});
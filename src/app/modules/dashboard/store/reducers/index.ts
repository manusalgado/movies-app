import { combineReducers } from '@ngrx/store';

import { moviesReducer as movies } from './movies.reducer';

export const MoviesRootReducer = combineReducers({
  movies
});
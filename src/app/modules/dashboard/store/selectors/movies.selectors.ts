import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromReducer from '../reducers/movies.reducer';
import { DashboardState } from '../state/dashboard.state';

export const moviesSelector = createFeatureSelector<DashboardState>('dashboardModule');

export const getMovies = createSelector(
  moviesSelector,
  (state: DashboardState) => state.movies
);

export const selectAllMovies = createSelector(getMovies, fromReducer.selectAll);

export const selectMovie = createSelector(
  moviesSelector,
  (state: DashboardState) => state.movie
);

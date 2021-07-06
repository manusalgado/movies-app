import { createAction, props } from '@ngrx/store';
import { MoviePayload } from '../../entities/dashboard';

export const getMoviesAction = createAction(
  '[Movies] get movies');

export const getMoviesSuccessAction = createAction(
  '[Movies] get movies success',
  props<{movies: MoviePayload[]}>());

export const getMoviesFailureAction = createAction(
  '[Movies] get movies failure',
  props<{error: string}>());

export const MovieActions = {
  getMoviesAction,
  getMoviesSuccessAction,
  getMoviesFailureAction
};
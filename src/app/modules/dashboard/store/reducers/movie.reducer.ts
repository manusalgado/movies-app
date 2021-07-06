import { Action, createReducer, on } from "@ngrx/store";
import { MoviePayload } from "../../entities/dashboard";
import { MovieActions } from "../actions/movies.actions";

export const initialState: MoviePayload = null;;

const reducer = createReducer(
  initialState,
  on(MovieActions.getMovieSuccessAction, (state, {movie}) => (movie))
);

export function movieReducer(state: MoviePayload | undefined, action: Action) {
  return reducer(state, action);
}

import { MoviesState } from "../reducers/movies.reducer";

export type DashboardState = Readonly <{
  loading: boolean;
  movies: MoviesState;
}>;

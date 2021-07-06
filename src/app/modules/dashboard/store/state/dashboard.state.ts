import { MoviePayload } from "../../entities/dashboard";
import { MoviesState } from "../reducers/movies.reducer";

export type DashboardState = Readonly <{
  loading: boolean;
  movies: MoviesState;
  movie: MoviePayload;
}>;

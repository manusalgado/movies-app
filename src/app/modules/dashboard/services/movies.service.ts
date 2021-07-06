import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MOVIES_DATA } from '../data/movies';
import { MoviePayload } from '../entities/dashboard';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  public movies(): Observable<MoviePayload[]> {
    return of(MOVIES_DATA);
  }

  public movie(): Observable<MoviePayload[]> {
    return of(MOVIES_DATA)
  }
}

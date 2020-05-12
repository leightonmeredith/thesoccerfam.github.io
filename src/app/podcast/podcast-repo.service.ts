import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IPodcast } from './podcast.model';

@Injectable({
  providedIn: 'root'
})
export class PodcastRepoService {

  private url = 'http://localhost:4200/assets/api/podcast.json';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IPodcast[]> {
    return this.http.get<IPodcast[]>(this.url)
      .pipe(
        tap(data => {
          console.log(data);
        }),
        catchError(this.handleError)
      )
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

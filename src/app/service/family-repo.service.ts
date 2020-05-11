import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { tap, catchError } from "rxjs/operators";
import { IFamily } from '../family/family.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyRepoService {

  private url = 'http://localhost:4200/assets/family.json'; 

  constructor(private http: HttpClient) { }

  getAll(): Observable<IFamily[]> {
    console.log(this.url)
    return this.http.get<IFamily[]>(this.url)
      .pipe(
        tap(data => {
          console.log(data);
        }),
        catchError(this.handleError)
      );
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

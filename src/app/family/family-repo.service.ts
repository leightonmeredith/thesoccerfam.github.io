import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { tap, catchError } from "rxjs/operators";
import { IFamily } from './family.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyRepoService {
  family$: BehaviorSubject<IFamily[]>;
  private url = 'http://localhost:4200/assets/api/family.json';

  constructor(private http: HttpClient) {
    this.initializeFamily();
  }

  getAll(): Observable<IFamily[]> {
    return this.http.get<IFamily[]>(this.url)
      .pipe(
        tap(data => {
          console.log(data);
        }),
        catchError(this.handleError)
      );
  }

  initializeFamily(isUpdated?: boolean) {
    if (!this.family$ || isUpdated) {
      this.family$ = new BehaviorSubject(new Array<IFamily>()) as BehaviorSubject<IFamily[]>;
      this.getAll().subscribe(response => {
        this.family$.next(response);
      })
    }
  }

  subscribeToFamily(): Observable<IFamily[]> {
    return this.family$.asObservable();
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

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { IFamily } from './family.model';
import { ErrorHandlerService } from 'src/shared/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class FamilyRepoService {
  family$: BehaviorSubject<IFamily[]>;
  private url = 'assets/api/family.json';

  constructor(private http: HttpClient, private geh: ErrorHandlerService) {
    // this.initializeFamily();
  }

  getAll(): Observable<IFamily[]> {
    return this.http.get<IFamily[]>(this.url).pipe(
      catchError(this.geh.handleError)
    );
  }

  // UNUSED: but shows how to initialize data without going to a page
  initializeFamily(isUpdated?: boolean) {
    if (!this.family$ || isUpdated) {
      this.family$ = new BehaviorSubject(new Array<IFamily>()) as BehaviorSubject<IFamily[]>;
      this.getAll().subscribe(response => {
        this.family$.next(response);
      });
    }
  }

  // UNUSED: but shows how to subscribe after the initialized call
  subscribeToFamily(): Observable<IFamily[]> {
    return this.family$.asObservable();
  }
}

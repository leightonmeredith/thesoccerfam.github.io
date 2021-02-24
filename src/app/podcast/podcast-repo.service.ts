import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IPodcast } from './podcast.model';
import { ErrorHandlerService } from 'src/shared/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class PodcastRepoService {

  private url = 'assets/api/podcast.json';

  constructor(private http: HttpClient, private geh: ErrorHandlerService) { }

  getAll(): Observable<IPodcast[]> {
    return this.http.get<IPodcast[]>(this.url).pipe(
      catchError(this.geh.handleError)
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResults } from './search-results.model';

@Injectable({
  providedIn: 'root'
})
export class SrchService {

  constructor(private http:HttpClient) { }

  searchPodcast(term: string): Observable<SearchResults> {
    return this.http.jsonp<SearchResults>('https://itunes.apple.com/search?entity=podcast&term=' + term, 'callback');
  }
}

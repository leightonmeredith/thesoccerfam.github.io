import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PodcastFeed } from './podcast-feed.model';

@Injectable({
  providedIn: 'root'
})
export class PodcService {

  constructor(private http: HttpClient) { }

  getPodcast(feedUrl: string) {
    const url = 'https://api.rss2json.com/v1/api.json?rss_url=' + feedUrl;
    return this.http.get(url).pipe(
      map(res => new PodcastFeed(res))
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { PodcastRepoService } from '../podcast/podcast-repo.service';
import { IPodcast } from '../podcast/podcast.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  podcast: IPodcast;

  constructor(private breakpointObserver: BreakpointObserver, private podcastRepo: PodcastRepoService) { }

  ngOnInit(): void {
    this.podcastRepo.getAll().subscribe(result => this.podcast = result[0]);
  }
}

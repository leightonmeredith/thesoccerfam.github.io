import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PodcastRepoService } from './podcast-repo.service';
import { IPodcast } from './podcast.model';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {

  displayedColumns: string[] = ['date', 'time', 'headline', 'desc', 'url'];
  
  podcast$: Observable<IPodcast[]>;

  constructor(private podcastRepo: PodcastRepoService) { }

  ngOnInit(): void {
    this.podcast$ = this.podcastRepo.getAll();
  }

}

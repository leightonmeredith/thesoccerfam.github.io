import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PodcastRepoService } from '../podcast/podcast-repo.service';
import { IPodcast } from '../podcast/podcast.model';
import { HandSetComponent } from 'src/shared/handset.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isHandset$: Observable<boolean>;

  podcast: IPodcast;

  constructor(private podcastRepo: PodcastRepoService, private handsetComponent: HandSetComponent) {
    this.isHandset$ = this.handsetComponent.isHandset$;
  }

  ngOnInit(): void {
    this.podcastRepo.getAll().subscribe(result => this.podcast = result[0]);
  }
}

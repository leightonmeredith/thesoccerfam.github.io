// import { PodcastEpisode } from './../../models/podcast-episode.model';
// import { PodcastFeed } from './../../models/podcast-feed.model';
// import { PodcastService } from './../../services/podcast.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastFeed } from './podcast-feed.model';
import {PodcService } from './podc.service';
import { PodcastEpisode } from './podcast-episode.model';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcComponent implements OnInit {
  feed: PodcastFeed;

  constructor(private route: ActivatedRoute, private podcastService: PodcService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.podcastService.getPodcast(params.get('url')).subscribe( feed => {
        this.feed = feed;
      });
    });
  }

  playEpisode(episode: PodcastEpisode) {
    (document.getElementById('player') as HTMLAudioElement).src = episode.enclosure.link;
    (document.getElementById('player') as HTMLAudioElement).play();

    console.log('playing: ' + episode.enclosure.link);
  }
}

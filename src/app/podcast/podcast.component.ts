import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {

  displayedColumns: string[] = ['date', 'time', 'headline', 'desc', 'url'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}


const ELEMENT_DATA: PeriodicElement[] = [
  {
    time: 66,
    date: 'Aug 27, 2019',
    headline: 'E2: Ryan vs Akan (EPL and Serie A)',
    desc: `This week  hear point of views from 2 Arsenal fans (and Marvin), as we discuss Liverpool's thrashing `,
    url: 'https://www.patreon.com/posts/e2-ryan-vs-akan-29481718'
  },
  {
    time: 70,
    date: 'Sep 7, 2019',
    headline: 'Labor Day North London Derby reactions',
    desc: `This episode features immediate reactions from the North London derby between Arsenal and Tottenham.`,
    url: 'https://www.patreon.com/posts/labor-day-north-29788966'
  },
  {
    time: 68,
    date: 'Oct 10, 2019',
    headline: 'Gameweek 7 review',
    desc: `Soccer Family back again for gameweek 7 reactions, topics include Pochettino/Spurs, Antonio Conte and`,
    url: 'https://www.patreon.com/posts/gameweek-7-30652298'
  },
  {
    time: 72,
    date: 'Nov 11, 2019',
    headline: '19/20-M12: Liverpool smash City; MLS expectations and problems;',
    desc: `This week it's M, KG, Nah, Marvo. Man U back to it's winning ways, City get a set back and Nah tells us his`,
    url: 'https://www.patreon.com/posts/19-20-m12-smash-31489466'
  },
  {
    time: 11,
    date: 'Nov 11, 2019',
    headline: '19/20-M12(extra): Bazzy vs B!!! [Friend Status Only]',
    desc: `This episode has M, B, Bazzy, Marvo. Bazzy thinks Leicester has better players than Arsenal. B is not happy!`,
    url: 'https://www.patreon.com/posts/19-20-m12-extra-31489978'
  },
  {
    time: 66,
    date: 'Aug 27, 2019',
    headline: 'E2: Ryan vs Akan (EPL and Serie A)',
    desc: `This week  hear point of views from 2 Arsenal fans (and Marvin), as we discuss Liverpool's thrashing `,
    url: 'https://www.patreon.com/posts/e2-ryan-vs-akan-29481718'
  },
  {
    time: 70,
    date: 'Sep 7, 2019',
    headline: 'Labor Day North London Derby reactions',
    desc: `This episode features immediate reactions from the North London derby between Arsenal and Tottenham.`,
    url: 'https://www.patreon.com/posts/labor-day-north-29788966'
  },
  {
    time: 68,
    date: 'Oct 10, 2019',
    headline: 'Gameweek 7 review',
    desc: `Soccer Family back again for gameweek 7 reactions, topics include Pochettino/Spurs, Antonio Conte and`,
    url: 'https://www.patreon.com/posts/gameweek-7-30652298'
  },
  {
    time: 72,
    date: 'Nov 11, 2019',
    headline: '19/20-M12: Liverpool smash City; MLS expectations and problems;',
    desc: `This week it's M, KG, Nah, Marvo. Man U back to it's winning ways, City get a set back and Nah tells us his`,
    url: 'https://www.patreon.com/posts/19-20-m12-smash-31489466'
  },
  {
    time: 11,
    date: 'Nov 11, 2019',
    headline: '19/20-M12(extra): Bazzy vs B!!! [Friend Status Only]',
    desc: `This episode has M, B, Bazzy, Marvo. Bazzy thinks Leicester has better players than Arsenal. B is not happy!`,
    url: 'https://www.patreon.com/posts/19-20-m12-extra-31489978'
  },
  {
    time: 67,
    date: 'Nov 17, 2019',
    headline: '19/20 - International: USA beat Canada; Club vs International powers',
    desc: `KG and Akan join us to talk international week. USA finally beat Canada; Questions we been longing to ask`,
    url: 'https://www.patreon.com/posts/19-20-usa-beat-31643416'
  },
  {
    time: 66,
    date: 'Aug 27, 2019',
    headline: 'E2: Ryan vs Akan (EPL and Serie A)',
    desc: `This week  hear point of views from 2 Arsenal fans (and Marvin), as we discuss Liverpool's thrashing `,
    url: 'https://www.patreon.com/posts/e2-ryan-vs-akan-29481718'
  },
  {
    time: 70,
    date: 'Sep 7, 2019',
    headline: 'Labor Day North London Derby reactions',
    desc: `This episode features immediate reactions from the North London derby between Arsenal and Tottenham.`,
    url: 'https://www.patreon.com/posts/labor-day-north-29788966'
  },
  {
    time: 68,
    date: 'Oct 10, 2019',
    headline: 'Gameweek 7 review',
    desc: `Soccer Family back again for gameweek 7 reactions, topics include Pochettino/Spurs, Antonio Conte and`,
    url: 'https://www.patreon.com/posts/gameweek-7-30652298'
  },
  {
    time: 72,
    date: 'Nov 11, 2019',
    headline: '19/20-M12: Liverpool smash City; MLS expectations and problems;',
    desc: `This week it's M, KG, Nah, Marvo. Man U back to it's winning ways, City get a set back and Nah tells us his`,
    url: 'https://www.patreon.com/posts/19-20-m12-smash-31489466'
  },
  {
    time: 11,
    date: 'Nov 11, 2019',
    headline: '19/20-M12(extra): Bazzy vs B!!! [Friend Status Only]',
    desc: `This episode has M, B, Bazzy, Marvo. Bazzy thinks Leicester has better players than Arsenal. B is not happy!`,
    url: 'https://www.patreon.com/posts/19-20-m12-extra-31489978'
  },
  {
    time: 66,
    date: 'Aug 27, 2019',
    headline: 'E2: Ryan vs Akan (EPL and Serie A)',
    desc: `This week  hear point of views from 2 Arsenal fans (and Marvin), as we discuss Liverpool's thrashing `,
    url: 'https://www.patreon.com/posts/e2-ryan-vs-akan-29481718'
  },
  {
    time: 70,
    date: 'Sep 7, 2019',
    headline: 'Labor Day North London Derby reactions',
    desc: `This episode features immediate reactions from the North London derby between Arsenal and Tottenham.`,
    url: 'https://www.patreon.com/posts/labor-day-north-29788966'
  },
  {
    time: 68,
    date: 'Oct 10, 2019',
    headline: 'Gameweek 7 review',
    desc: `Soccer Family back again for gameweek 7 reactions, topics include Pochettino/Spurs, Antonio Conte and`,
    url: 'https://www.patreon.com/posts/gameweek-7-30652298'
  },
  {
    time: 72,
    date: 'Nov 11, 2019',
    headline: '19/20-M12: Liverpool smash City; MLS expectations and problems;',
    desc: `This week it's M, KG, Nah, Marvo. Man U back to it's winning ways, City get a set back and Nah tells us his`,
    url: 'https://www.patreon.com/posts/19-20-m12-smash-31489466'
  },
  {
    time: 11,
    date: 'Nov 11, 2019',
    headline: '19/20-M12(extra): Bazzy vs B!!! [Friend Status Only]',
    desc: `This episode has M, B, Bazzy, Marvo. Bazzy thinks Leicester has better players than Arsenal. B is not happy!`,
    url: 'https://www.patreon.com/posts/19-20-m12-extra-31489978'
  },
  {
    time: 67,
    date: 'Nov 17, 2019',
    headline: '19/20 - International: USA beat Canada; Club vs International powers',
    desc: `KG and Akan join us to talk international week. USA finally beat Canada; Questions we been longing to ask`,
    url: 'https://www.patreon.com/posts/19-20-usa-beat-31643416'
  }
];


export interface PeriodicElement {
  date: string;
  time: number;
  headline: string;
  desc: string;
  url: string;
}
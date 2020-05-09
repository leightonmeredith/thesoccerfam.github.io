import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  family$: Observable<any>;
  family: any;
  selectedMember: any = { id: 0 };

  customOptions: any = {
    loop: true,
    nav: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: ['TODO:ADD LEFT IMG', 'TODO:ADD RIGHT IMG'],
    responsive: {
      0: { items: 1 },
      400: { items: 2 },
      740: { items: 3 },
      940: { items: 4 }
    },
  }

  constructor() { }

  ngOnInit(): void {
    this.getFamily().subscribe(result => {
      this.family = result;
      console.log(result)
    });
  }

  getBio(member: any) {
    this.family.forEach(element => {
      if (element.id === member.id) {
        this.selectedMember = element;
      }
    });

  }

  getFamily() {

    return of(
      [
        {
          "id": 1,
          "name": "M",
          "img": "/assets/m.jpg",
          "desc": "M has the headphones!",
          "team":"Manchester United",
          "country":"Jamaica"
        },
        {
          "id": 2,
          "name": "Nah",
          "img": "/assets/nah.jpg",
          "desc": "Nah has Napoleon complex!",
          "team":"Chelsea",
          "country":"Ethiopia"
        },
        {
          "id": 3,
          "name": "Pros",
          "img": "/assets/pros.jpg",
          "desc": "Pros is fat!",
          "team":"Arsenal",
          "country":"Dominica"
        },
        {
          "id": 4,
          "name": "B",
          "img": "/assets/b.jpg",
          "desc": "B is ugly!",
          "team":"Arsenal",
          "country":"Jamaica"
        },
        {
          "id": 5,
          "name": "Marvo",
          "img": "/assets/marvo.jpg",
          "desc": "Marvo is an asshole!",
          "team":"Chelsea",
          "country":"Kenya"
        },
        {
          "id": 6,
          "name": "KG",
          "img": "/assets/kg.jpg",
          "desc": "KG is insecure!",
          "team":"Chelsea",
          "country":"St. Vincent"
        },
        {
          "id": 7,
          "name": "Bazzy",
          "img": "/assets/bazzy.jpg",
          "desc": "Bazzy needs help!",
          "team":"Arsenal",
          "country":"Côte d'Ivoire"
        },
        {
          "id": 8,
          "name": "Akan",
          "img": "/assets/akan.jpg",
          "desc": "Akan is weird!",
          "team":"Arsenal",
          "country":"Nigeria"
        }
      ]
    )
  }
}

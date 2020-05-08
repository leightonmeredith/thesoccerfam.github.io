import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../home/home.component';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

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
          "country":"Unknown"
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
          "country":"IDK"
        }
      ]
    )
  }
}


const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
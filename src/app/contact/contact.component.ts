import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: any = {
    email:'',
    subject: '',
    message: ''
  };


  constructor() { }

  ngOnInit(): void {
  }

  // sendEmail() {
  //   console.log(this.contact)
  //   // submit email
  // }
}


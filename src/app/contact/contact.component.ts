import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });

  // email = new FormControl('');
  // subject = new FormControl('');
  // message = new FormControl('');


  constructor() { }

  ngOnInit(): void {
  }

  sendEmail() {
    // console.log(this.contactGroup)
    // submit email
  }
}


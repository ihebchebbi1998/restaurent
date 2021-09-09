import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  cnt: any = { };
  constructor(private fb: FormBuilder,
    private contactService: ContactService ,
    private router:Router) { }

  ngOnInit() {

    this.contactForm = this.fb.group(
      {
        message: [''],
        name: [''],
        email: [''],
        subject: ['']
      }
    )


  }
  contact() {
    this.contactService.addcontact(this.cnt).subscribe(
      (data) => {
        console.log('result', data.message);

      }
    );
this.router.navigate(['']);


  }


}

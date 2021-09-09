import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-admin-contacts',
  templateUrl: './admin-contacts.component.html',
  styleUrls: ['./admin-contacts.component.css']
})
export class AdminContactsComponent implements OnInit {
contacts:any;
  constructor(private contactService:ContactService) { }

  ngOnInit() {
    this.contactService.getAllcontacts().subscribe(
    (data)=>{

this.contacts=data.allContacts;

    }
    )
  }
  deleteContact(id){
this.contactService.deleteContact(id).subscribe(
  (data)=>{
    console.log('result',data.message);
    this.contactService.getAllcontacts().subscribe(
(data)=>{

  this.contacts=data.allContacts;
}

    );
  }
)

  }

}

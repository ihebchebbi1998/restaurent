import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
contacts:any={};
  constructor(
    private contactService:ContactService
  ) { }

  ngOnInit() {
    this.contactService.getAllcontacts().subscribe(

      (data)=>{
        this.contacts= data.allContacts;


      }
    );

    console.log("les contacts",this.contacts);
    

  }

}

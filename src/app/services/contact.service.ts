import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactURL:string='http://localhost:3000/contacts';
  constructor(private http:HttpClient) { }

getAllcontacts(){
  return this.http.get<{allContacts:any}>(this.contactURL);

}
getContactById(id){


  return this.http.get(`${this.contactURL}/${id}`);
}
deleteContact(id)
{
 return this.http.delete<{message:string}>(`${this.contactURL}/${id}`);

}
addcontact(contact){
  return this.http.post<{message:string}>(this.contactURL, contact);


}
updatecontact(contact){
  return this.http.put(`${this.contactURL}/${contact.id}`,contact);


}
}



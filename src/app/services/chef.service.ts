import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  //backend URL:
chefURL:string='http://localhost:3000/chefs';
  constructor(private http:HttpClient) { }

getAllChefs(){
  return this.http.get<{allChefs:any}>(this.chefURL);

}
getChefById(id){


  return this.http.get<{chef:any}>(`${this.chefURL}/${id}`);
}
deleteChef(id)
{
 return this.http.delete<{message:string}>(`${this.chefURL}/${id}`);

}
addChef(chef){
  return this.http.post<{message:string}>(this.chefURL, chef);


}
updateChef(chef){
  return this.http.put<{message:string}>(`${this.chefURL}/${chef._id}`,chef);


}
searchBySpeciality(specialty){
  return this.http.post<{serachedChefs:any , message:string}>(`${this.chefURL}/search`,specialty);

}






}
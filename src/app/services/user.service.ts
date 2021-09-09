import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL: string = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }
  getAllUsers() {
    return this.http.get<{ allUsers: any }>(this.userURL);
  }
  getUserById(id) {

    return this.http.get<{ user: any }>(`${this.userURL}/${id}`);

  }
  deleteUser(id) {
    return this.http.delete<{ message: string }>(`${this.userURL}/${id}`);


  }
  signup(user: any) {
    return this.http.post<{message:string}>(`${this.userURL}/signup`, user);


  }
  updateUser(user: any) {
    return this.http.put<{message}>(`${this.userURL}/${user._id}`, user);


  }
  login(user: any) {
    return this.http.post<{message:string, connectedUser:any}>(`${this.userURL}/login`, user);
  }
}

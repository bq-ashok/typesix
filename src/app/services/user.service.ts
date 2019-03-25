import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: string ;
  constructor(private http: HttpClient) {
   }

 getUser() {
   return this.http.get('https://api.github.com/users/hadley/orgs');
 }

}

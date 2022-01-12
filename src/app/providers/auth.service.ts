/* import { Injectable } from '@angular/core';


import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {apikey} from "../../app/apiurls/serverurls.js";


const httpOptions ={
  headers :new HttpHeaders({'content-type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: any;

  constructor(public storage: Storage , public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }






  createAccount(details){
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this.http.post('http://localhost:8000/api/register', JSON.stringify(details), httpOptions)
          .subscribe(res => {
            let data = res => (<Response>res).json();
           // this.token = data.token;
            //this.storage.set('token', data.token);
            resolve(data);
 
          }, (err) => {
            reject(err);
          });
    });
  }






  login(credentials){
    return new Promise((resolve, reject) => {
      let httpOptions1 ={
        headers :new HttpHeaders({'content-type':'application/json','Accept':'application/json','Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT','Access-Control-Allow-Origin' : '*'})
      }
       
     
        this.http.post('http://localhost:8000/api/login', JSON.stringify(credentials), httpOptions1)
          .subscribe(res => {
            let data = res => (<Response>res).json();
            this.token = data['token'];

            this.storage.set('token', this.token);
            resolve(data);
   }, (err) => {
            reject(err);
          
          });  });
 
  }





  checkAuthentication(){

    return new Promise((resolve, reject) => {
    this.storage.get('token').then((value) => {
 
      this.token = value;

      resolve(this.token)


    }) 
  });        



  }




  logout(){
    this.storage.set('token', '');
  
   }





}
 */
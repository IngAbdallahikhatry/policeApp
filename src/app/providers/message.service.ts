import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {apiKey} from "../../app/apiurls/serverurls.js";
import {catchError,map} from  'rxjs/operators';
import { Observable ,throwError} from 'rxjs';

import { AlertController, NavController } from '@ionic/angular';
import { LanguageService } from '../services/language.service';


import { Storage } from '@ionic/storage';

const httpOptions ={
  headers :new HttpHeaders({'content-type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient,private navCtrl: NavController,
    public alertController: AlertController,
    private lngs:LanguageService,private storage: Storage) { }

    pushApi(Data){
      // return this.http.post("http://servipolice.xyz/public/api/create",Data);
      this.http.post("http://localhost:8000/api/storeM",  Data)
      .subscribe(data => {
//Check success message
  //sweetalert message popup
  
    });}
  

  extractData(res:Response){
    let body=res;
    return body || {};
  }


  getMessage():Observable<any>{
    return this.http.get("http://servipolice.xyz/public/api/messages",httpOptions).pipe(map(this.extractData));
  }


  AjoutMessage(MesInfo){
    let headers=new Headers();
    headers.append('Content-Type', 'application/json');

    this.http.post('http://servipolice.xyz/public/api/create',JSON.stringify(MesInfo), httpOptions).pipe().subscribe(data=>{
      console.log(data)
    })

    }



    async presentAlert() {
      let vr =await this.storage.get('SELECTED_LANGUAGE');
      let msg='gghh';
      if(vr =='en'){
        msg ='Success';
      }else if(vr =='ar'){
       msg ='تم الارسال'
      }
      else if(vr =='fr'){
        msg ='avec succes'
       }
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        message:  msg + '<ion-icon name="checkmark-circle"></ion-icon>',
        buttons: [{
          text:'OK',
          handler:()=> {this.navCtrl.back();
        }
         } ]
      });
   await alert.present();

  
     
    }


 
    insertPosts(postInfo){

     postInfo.forEach(a=>{
        console.log(a)
             });
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
  
 

    
        this.http.post("https://servipolice.xyz/public/api/create",  postInfo,{headers:headers})
           .subscribe(data  => {
  
 this.presentAlert();
  console.log(data)


  
},(err:any)=>{
  
  alert("لم تضف جميع البيانات المطلوبة");
 
}
);
 
 
}
 
    
     
    
    }
 
   
  



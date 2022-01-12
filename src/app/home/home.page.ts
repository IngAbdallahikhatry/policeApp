import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
subscribe:any;
  constructor(private router:NavController,public platform:Platform) 
  {
    this.subscribe=this.platform.backButton.subscribeWithPriority(666666,
    ()=>{
   
     if(window.confirm("fermer l'application")){
      navigator["app"].exitApp();
     }

      
    })
  }


  Informer(){
     this.router.navigateRoot('createmessage');
  }

  Avis(){
    this.router.navigateRoot('avis');
 }

 Message(){
  this.router.navigateRoot('message');
 }

}

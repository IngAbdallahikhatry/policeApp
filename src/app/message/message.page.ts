import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MessageService } from '../providers/message.service';

import { Geolocation ,Geoposition} from '@ionic-native/geolocation/ngx'; 


import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  mydata:any
  constructor(
    private router:Router,
    private fb:FormBuilder,
    private messaServ:MessageService ,
    public navCtrl: NavController,
    private geolocation:Geolocation,
    private locationAccuracy:LocationAccuracy
  ) {
    this.messaServ.getMessage().subscribe((data) => {
     console.log(data)
      this.mydata = data 
      console.log( this.mydata)
    })


   }

  ngOnInit() {
  }

  recupererData(myInfo){
    // this.myInfo.description='ffgh';
     
      this.messaServ.getMessage().subscribe(res =>{
        res.forEach(element => {
          console.log(element.description)
        });
      })
      
      } 

}

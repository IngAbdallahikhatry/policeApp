import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, Platform, PopoverController } from '@ionic/angular';
import { MessageService } from '../providers/message.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Geolocation ,Geoposition} from '@ionic-native/geolocation/ngx'; 


import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { AvisService } from '../providers/avis.service';
import { LanguagePopoverPage } from '../pages/language-popover/language-popover.page';


@Component({
  selector: 'app-informer',
  templateUrl: './informer.page.html',
  styleUrls: ['./informer.page.scss'],
})
export class InformerPage implements OnInit ,AfterViewInit{


guichetForm:FormGroup;
msg1:any;
msg2:any;

myInfo={
  image:'hjykjh',
  description:'',
  phone:'3255666',
  altitude:null,
  longitude:null
}
subscribe:any
mydata:any;
data:any;
  constructor(
    private router:Router,
    private fb:FormBuilder,
    public platform:Platform,
    private avisServ:AvisService ,
    public navCtrl: NavController,
    private popover :PopoverController,
    private route:ActivatedRoute,
    private socialSharing:SocialSharing
    ) { 
      this.route.queryParams.subscribe(params=>{
           if(params &&params.special){
            this.data=JSON.parse(params.special)
            console.log(this.data)
           }
      });
     
      this.subscribe=this.platform.backButton.subscribeWithPriority(666666,
        ()=>{
       
         this.navCtrl.back();
    
          
        })
     
    }

  ngOnInit() {
    
      
    
      } 

ngAfterViewInit(){
 
}


back(){
  this.navCtrl.back();
}

sShare(){
  var options = {
    message: 'share this', // not supported on some apps (Facebook, Instagram)
    url: 'https://https://ionicframework.com/docs/native/social-sharing',
    };

    this.socialSharing.shareWithOptions(options);
}

sharefb(msg){
  this.msg1="المصدر: الإدارة العامة للأمن الوطني",
  this.msg2=msg,this.msg1; 
 this.socialSharing.shareViaFacebook(this.msg2,null,null).then(()=>{
 
}).catch(e=>{
   
});
}


sharewtsp(msg){
  this.msg1="المصدر: الإدارة العامة للأمن الوطني",
  this.msg2=msg +'\n' + this.msg1; 
  console.log(this.msg2);
 this.socialSharing.shareViaWhatsApp(this.msg2,null,null).then(()=>{
  
}).catch(e=>{
   
}); 

}


sharemsng(msg){
  this.msg1="المصدر: الإدارة العامة للأمن الوطني",
  this.msg2=msg,this.msg1; 
    this.socialSharing.shareVia('com.facebook.orca',this.msg2,null,null)

}



async lngs(ev){

  const popover=await this.popover.create(
    {
      component:LanguagePopoverPage,
      event :ev,
      componentProps:{
         root:'tabs/informer'
       } 


    });

popover.present();

}


}

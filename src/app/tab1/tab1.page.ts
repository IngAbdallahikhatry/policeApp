import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, PopoverController } from '@ionic/angular';


import { ComusareatService } from '../providers/comusareat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation ,Geoposition} from '@ionic-native/geolocation/ngx'; 
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Network } from '@ionic-native/network/ngx';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Storage } from '@ionic/storage';
import { LanguagePopoverPage } from '../pages/language-popover/language-popover.page';

declare var google;
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  distance='';
  nbr=0;
  distance1:any;
  durationL:any;
  durationLeg:any;
  nom:any;
  phone:any;
  display=true;
  display1=true;
  directionsService = new google.maps.DirectionsService();
   directionsRenderer = new google.maps.DirectionsRenderer();
  constructor(private geolocation:Geolocation,
    private locationAccuracy:LocationAccuracy,
    private network:Network,
    private storage: Storage,
    private alertController:AlertController,
    private popover :PopoverController,
    private comusService:ComusareatService,private route:ActivatedRoute,router:Router,private rout:NavController) {
    
      
    this.network.onDisconnect().subscribe(() => {
    this.presentAlert();
      });
      
      

  
  }
  dist:any;
  currentLocation: any= {
    lat: 0,
    lng: 0
   };
   distances=[];
   sorted =[];
   infdixk=[];
  mydata:any;

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message: ' الرجاء تشغيل البيانات ',
      buttons: [
       'OK'
      
      ]
    });
 await alert.present();


   
  }
  async recupererData(){
    // this.myInfo.description='ffgh';
     let lng=await this.storage.get('SELECTED_LANGUAGE') ;
      this.comusService.getComuseareat(lng).subscribe(res =>{
        this.mydata=res;
        console.log(this.mydata)
        res.forEach(element => {
          console.log(element.libelle)
        });
      })
      
      }

      ngOnInit() {
    
        this.storage.get('SELECTED_LANGUAGE').then(lng=>{

        
        this.comusService.getComuseareat(lng).subscribe(res =>{
          this.mydata=res;
          console.log(this.mydata)
          res.forEach(element => {
            console.log(element.libelle)
          });
          this.calculeDis(this.mydata);
        })
       
        })
        
    
  }


  goFormulaire(){
    this.rout.navigateRoot('tabs/createmessage');
  }

  Avis(){
    this.nbr = Math.random()*100;
    this.rout.navigateRoot(['tabs/avis',this.nbr]);
  }

  NumComus(){
    this.rout.navigateRoot('tabs/num-comus');
  }

  ListeComus(){
    this.rout.navigateRoot('tabs/comisareat');
  }



  i=0;
  
  calculeDis(list){
    console.log(list);
    this.askToTurnOnGPS();
  this.geolocation.getCurrentPosition().then((resp) => {
    this.currentLocation.lat= resp.coords.latitude;
    this.currentLocation.lng=resp.coords.longitude ;
   
  var gps1=new google.maps.LatLng(this.currentLocation.lat,this.currentLocation.lng);
        
  list.forEach(res=>{
   this.i++;
    
    
    var gps2=new google.maps.LatLng(res.altitude,res.longitude);
    var distance=google.maps.geometry.spherical.computeDistanceBetween(gps1,gps2);
    this.distances.push({"id":res.id,"distance":distance,"Nom":res.libelle,"altitude":res.altitude,"longitude":res.longitude,"phone":res.phone});
    
   if(this.i==list.length){
     console.log('ok')
      this.sorted = this.distances.sort(function(a, b) {
        return a.distance - b.distance ;
      
        
        })
        this.sorted=this.sorted.slice(0,1);
        this.sorted.forEach(res=>{
          if(res.distance <= 10000 ){
          this.infdixk.push({"id":res.id,"distance":distance,"Nom":res.Nom,"altitude":res.altitude,"longitude":res.longitude,"phone":res.phone});
          }
          
        })
        let x = this.sorted[0].distance/1000;
        let res = x.toFixed(1);
        this.dist=res;
        console.log(this.sorted[0].distance);
        
        const that=this;
        var gps2=new google.maps.LatLng(this.sorted[0].altitude,this.sorted[0].longitude);
        this.directionsService.route({
          //origin:formValues.source,
          origin: this.currentLocation,
          destination:gps2,
          travelMode:'DRIVING'
          
        },(response,status)=>{
          if(status==='OK'){
            that.directionsRenderer.setDirections(response);
            this.distance =((response.routes[0].legs[0].distance.value)/1000).toFixed(1);
            this.display1=false;
            this.durationLeg=response.routes[0].legs[0].duration.text;
            console.log(this.distance);
            console.log(response.routes[0].legs[0].distance)
          }else{
            window.alert('Directions request failed due to '+status);
          }
        }
        );
       
        this.nom=this.sorted[0].Nom;
        this.phone=this.sorted[0].phone;
     
        this.display=false
    }
    
   }) 

  });

}

askToTurnOnGPS() {
  this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
    () => {
      // Wh²en GPS Turned ON call method to get Accurate location coordinates

    },
    error => alert('Error requesting location permissions ' + JSON.stringify(error))
  );
}

calculateAndDisplayRoute(sorted){
   
  const that=this;
 
  var gps2=new google.maps.LatLng(sorted.altitude,sorted.longitude);
  this.directionsService.route({
    //origin:formValues.source,
    origin: this.currentLocation,
    destination:gps2,
    travelMode:'DRIVING'
    
  },(response,status)=>{
    if(status==='OK'){
      that.directionsRenderer.setDirections(response);
      this.distance =response.routes[0].legs[0].distance.text;
      this.durationLeg=response.routes[0].legs[0].duration.text;
      console.log(response);

    }else{
      window.alert('Directions request failed due to '+status);
    }
  }
  );
  this.directionsService.route({
    //origin:formValues.source,
    origin: this.currentLocation,
    destination:gps2,
    travelMode:'WALKING',
    
  },(response,status)=>{
    if(status==='OK'){
     // that.directionsRenderer.setDirections(response);
      this.distance1 =response.routes[0].legs[0].distance.text;
      this.durationL=response.routes[0].legs[0].duration.text;
      console.log(response);

    }else{
      window.alert('Directions request failed due to '+status);
    }
  }
  );

}



windcart=function(sorted){
  window.open("https:www.google.com/maps/dir/"+this.currentLocation.lat+","+this.currentLocation.lng+"/"+sorted.altitude+","+sorted.longitude+"/@",'_system', 'location=true');
  console.log("GGGGHHHHHH");
  console.log(sorted.altitude);
  console.log(this.currentLocation.lat);
}


delil(){
  this.rout.navigateRoot('tabs/mobiles');
}


async lngs(ev){

  const popover=await this.popover.create(
    {
      component:LanguagePopoverPage,
      event :ev,
      componentProps:{
        root:'tabs/tab1'
      } 


    });

popover.present();

}


}

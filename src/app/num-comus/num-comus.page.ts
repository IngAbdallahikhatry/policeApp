import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ComusareatService } from '../providers/comusareat.service';
import { Geolocation ,Geoposition} from '@ionic-native/geolocation/ngx'; 

declare var google;
@Component({
  selector: 'app-num-comus',
  templateUrl: './num-comus.page.html',
  styleUrls: ['./num-comus.page.scss'],
})
export class NumComusPage implements OnInit {
  @ViewChild('mapElement') mapNativeElement:ElementRef;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  currentLocation: any= {
   lat: 0,
   lng: 0
  };
 
  distances=[];
  sorted=[];
  id:null;
  obj:any={
    id:0,
    distance:0,
    Nom:null,
    altitude:0,
    longitude:0

  }
  distance:any;
  distance1:any;
  durationL:any;
  durationLeg:any;
  
  comusareat=[];
  comus:any;
  public maDate = new Date();
  constructor(private geolocation:Geolocation,private comusService:ComusareatService,private route:ActivatedRoute,router:Router,private rout:NavController) {
 
  
  }
 
 ngOnInit(){
 
 
   
 

}
 
maps(){
 const map =new google.maps.Map(this.mapNativeElement.nativeElement,{
   zoom:7,
   center:{lat:this.currentLocation.lat,lng:this.currentLocation.lng}
   
   
});
 this.directionsRenderer.setMap(map);

}




 back(){
   this.rout.back();
 }

 calculateAndDisplayRoute(){
  
   const that=this;
  
   var comusar=new google.maps.LatLng(this.comus.altitude,this.comus.longitude);
 
   this.directionsService.route({
     //origin:formValues.source,
     origin: this.currentLocation,
     destination:comusar,
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
     destination:comusar,
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



 windcart=function(){
   window.open("https:www.google.com/maps/dir/"+this.currentLocation.lat+","+this.currentLocation.lng+"/"+this.comus.altitude+","+this.comus.longitude+"/@",'_system', 'location=true');
   console.log("GGGGHHHHHH");
   console.log(this.comus.altitude);
   console.log(this.currentLocation.lat);
 }
}

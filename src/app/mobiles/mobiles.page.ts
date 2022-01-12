import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { NavController, PopoverController } from '@ionic/angular';
import { ComusareatService } from '../providers/comusareat.service';
import { Storage } from '@ionic/storage';
import { Geolocation ,Geoposition} from '@ionic-native/geolocation/ngx';
import { MobilesService } from '../providers/mobiles.service';
import { LanguagePopoverPage } from '../pages/language-popover/language-popover.page';
declare var google;
@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.page.html',
  styleUrls: ['./mobiles.page.scss'],
})
export class MobilesPage implements OnInit {

  distance:any;
  distance1:any;
  durationL:any;
  durationLeg:any;
  nom:any;
  
  phone:any;
  directionsService = new google.maps.DirectionsService();
   directionsRenderer = new google.maps.DirectionsRenderer();
  constructor(private geolocation:Geolocation,
    private locationAccuracy:LocationAccuracy,
    private popover :PopoverController,
    private storage:Storage,
    private mblsService:MobilesService,private route:ActivatedRoute,private router:Router,private rout:NavController) {
 
  
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
  async recupererData(){
    // this.myInfo.description='ffgh';
    let lng=await this.storage.get('SELECTED_LANGUAGE');
      this.mblsService.getComuseareat(lng).subscribe(res =>{
        this.mydata=res;
        console.log(this.mydata)
        res.forEach(element => {
          console.log(element.libelle)
        });
      })
      
      }

      ngOnInit() {
        this.storage.get('SELECTED_LANGUAGE').then(lng =>{
        this.mblsService.getComuseareat(lng).subscribe(res =>{
          this.mydata=res;
          console.log(this.mydata)
          res.forEach(element => {
            console.log(element.libelle)
          });
          this.calculeDis(this.mydata);
        })
       
      })  
        
    
  }

  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
  
      },
      error => alert('Error requesting location permissions ' + JSON.stringify(error))
    );
  }

  distF:any;






 back(){
  this.router.navigateByUrl('tabs/tab1');
 }
i=0;
 calculeDis(list){
  console.log(list);
this.geolocation.getCurrentPosition().then((resp) => {
  this.currentLocation.lat= resp.coords.latitude;
  this.currentLocation.lng=resp.coords.longitude ;
 
var gps1=new google.maps.LatLng(this.currentLocation.lat,this.currentLocation.lng);
      
list.forEach(res=>{
 this.i++;
  
  
  var gps2=new google.maps.LatLng(res.altitude,res.longitude);
  var distance=(google.maps.geometry.spherical.computeDistanceBetween(gps1,gps2)/1000).toFixed(1);
  this.distances.push({"id":res.id,"distance":distance,"Nom":res.libelle,"altitude":res.altitude,"longitude":res.longitude,"phone":res.phone});
  
 if(this.i==list.length){
   console.log('ok')
    this.sorted = this.distances.sort(function(a, b) {
      return a.distance - b.distance ;
    
      
      })
      this.sorted=this.sorted;
      this.sorted.forEach(res=>{
        if(res.distance <= 10000 ){
        this.infdixk.push({"id":res.id,"distance":distance,"Nom":res.Nom,"altitude":res.altitude,"longitude":res.longitude,"phone":res.phone});
        }
        
      })
      
  }
  
 }) 

});


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



async lngs(ev){

  const popover=await this.popover.create(
    {
      component:LanguagePopoverPage,
      event :ev,
      componentProps:{
        root:'tabs/mobiles'
      } 


    });

popover.present();

}


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { NavController, PopoverController } from '@ionic/angular';
import { ComusareatService } from '../providers/comusareat.service';

import { Geolocation ,Geoposition} from '@ionic-native/geolocation/ngx';
import { MobilesService } from '../providers/mobiles.service';
import { LanguagePopoverPage } from '../pages/language-popover/language-popover.page';
declare var google;
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
    constructor(private geolocation:Geolocation,
    private locationAccuracy:LocationAccuracy,
    private popover :PopoverController,
    private mblsService:MobilesService,private route:ActivatedRoute,router:Router,private rout:NavController) {
 
  
  }
   ngOnInit(){

   }

   
 back(){
  this.rout.back();
}

async lngs(ev){

  const popover=await this.popover.create(
    {
      component:LanguagePopoverPage,
      event :ev


    });

popover.present();

}


}

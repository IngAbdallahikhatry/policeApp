import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { LanguagePopoverPage } from '../pages/language-popover/language-popover.page';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  constructor(private rout:NavController,private popover :PopoverController,) { }

  ngOnInit() {
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

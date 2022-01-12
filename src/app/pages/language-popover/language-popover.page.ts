import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams, PopoverController } from '@ionic/angular';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-popover',
  templateUrl: './language-popover.page.html',
  styleUrls: ['./language-popover.page.scss'],
})
export class LanguagePopoverPage implements OnInit {
    languages = [];
    selected = '';
     root =""  ;
    constructor(private popoveCntrl: PopoverController,
        private languageService: LanguageService,private nvCtel:NavController,
        private prms:NavParams
        ) {
           
            this.root = this.prms.get('root');
           console.log(this.root);
         }

    ngOnInit() {
        this.languages = this.languageService.getLanguage();
        this.selected = this.languageService.selected;

    }


    select(lng) {
        this.languageService.setLanguage(lng);
     
        let nbr =Math.random()*100;
        this.nvCtel.navigateRoot([this.root,nbr]);
        this.popoveCntrl.dismiss();
        
       
    }

}

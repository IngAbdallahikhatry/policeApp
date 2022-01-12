import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LanguagePopoverPageRoutingModule } from './language-popover-routing.module';

import { LanguagePopoverPage } from './language-popover.page';
import { TranslateModule } from '@ngx-translate/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

    {
        path: '',
        component: LanguagePopoverPage
    }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
        LanguagePopoverPageRoutingModule,
        TranslateModule
  ],
  declarations: [LanguagePopoverPage]
})
export class LanguagePopoverPageModule {}

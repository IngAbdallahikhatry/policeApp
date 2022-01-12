import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobilesPageRoutingModule } from './mobiles-routing.module';

import { MobilesPage } from './mobiles.page';
import {  TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobilesPageRoutingModule,
    TranslateModule
  ],
  declarations: [MobilesPage]
})
export class MobilesPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvisPageRoutingModule } from './avis-routing.module';

import { AvisPage } from './avis.page';
import {  TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvisPageRoutingModule,
    TranslateModule
  ],
  declarations: [AvisPage]
})
export class AvisPageModule {}

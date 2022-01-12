import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComisareatPageRoutingModule } from './comisareat-routing.module';

import { ComisareatPage } from './comisareat.page';
import {  TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComisareatPageRoutingModule,
    TranslateModule
  ],
  declarations: [ComisareatPage]
})
export class ComisareatPageModule {}

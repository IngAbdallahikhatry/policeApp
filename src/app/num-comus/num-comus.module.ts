import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumComusPageRoutingModule } from './num-comus-routing.module';

import { NumComusPage } from './num-comus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumComusPageRoutingModule
  ],
  declarations: [NumComusPage]
})
export class NumComusPageModule {}

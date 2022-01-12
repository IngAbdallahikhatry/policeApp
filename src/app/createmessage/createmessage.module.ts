import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatemessagePageRoutingModule } from './createmessage-routing.module';

import { CreatemessagePage } from './createmessage.page';
import { RouterModule, Routes } from '@angular/router';
import {  TranslateModule } from '@ngx-translate/core';
const route:Routes=[
  {
    path:'',
    component:CreatemessagePage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    CreatemessagePageRoutingModule
  ],
  declarations: [CreatemessagePage]
})
export class CreatemessagePageModule {}

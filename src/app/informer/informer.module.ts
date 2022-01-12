import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Routes ,RouterModule} from '@angular/router';

import { InformerPageRoutingModule } from './informer-routing.module';

import { InformerPage } from './informer.page';
import {  TranslateModule } from '@ngx-translate/core';
const route:Routes=[
  {
    path:'',
    component:InformerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    InformerPageRoutingModule,
    TranslateModule
  ],
  declarations: [InformerPage]
})
export class InformerPageModule {}

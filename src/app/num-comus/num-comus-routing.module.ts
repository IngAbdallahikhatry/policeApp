import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumComusPage } from './num-comus.page';

const routes: Routes = [
  {
    path: '',
    component: NumComusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumComusPageRoutingModule {}

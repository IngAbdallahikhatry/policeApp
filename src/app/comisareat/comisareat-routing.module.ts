import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComisareatPage } from './comisareat.page';

const routes: Routes = [
  {
    path: '',
    component: ComisareatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComisareatPageRoutingModule {}

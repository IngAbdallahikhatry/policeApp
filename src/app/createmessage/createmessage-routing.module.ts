import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatemessagePage } from './createmessage.page';

const routes: Routes = [
  {
    path: '',
    component: CreatemessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatemessagePageRoutingModule {}

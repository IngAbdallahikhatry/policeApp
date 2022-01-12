import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [

      {
        path: 'createmessage',
        loadChildren: () => import('../createmessage/createmessage.module').then( m => m.CreatemessagePageModule)
      },
      {
        path: 'createmessage/:nbr',
        loadChildren: () => import('../createmessage/createmessage.module').then( m => m.CreatemessagePageModule)
      },
      {
        path: 'mobiles',
        loadChildren: () => import('../mobiles/mobiles.module').then( m => m.MobilesPageModule)
      },
      {
        path: 'mobiles/:nbr',
        loadChildren: () => import('../mobiles/mobiles.module').then( m => m.MobilesPageModule)
      },
      {
        path: 'avis',
        loadChildren: () => import('../avis/avis.module').then( m => m.AvisPageModule)
      },
      {
        path: 'avis/:nbr',
        loadChildren: () => import('../avis/avis.module').then( m => m.AvisPageModule)
      },
      {
        path: 'comisareat',
        loadChildren: () => import('../comisareat/comisareat.module').then( m => m.ComisareatPageModule)
      },
      {
        path: 'comisareat/:nbr',
        loadChildren: () => import('../comisareat/comisareat.module').then( m => m.ComisareatPageModule)
      },

      {
        path: 'num-comus',
        loadChildren: () => import('../num-comus/num-comus.module').then( m => m.NumComusPageModule)
      },
      {
        path: 'informer',
        loadChildren: () => import('../informer/informer.module').then( m => m.InformerPageModule)
      },
      {
        path: 'informer/:id',
        loadChildren: () => import('../informer/informer.module').then( m => m.InformerPageModule)
      },

      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab1/:nbr',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    
    ]
  
  
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

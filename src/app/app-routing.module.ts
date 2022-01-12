import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
 /*  {
    
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  }, */
  {
    path: 'avis',
    loadChildren: () => import('./avis/avis.module').then( m => m.AvisPageModule)
  },
  {
    path: 'informer',
    loadChildren: () => import('./informer/informer.module').then( m => m.InformerPageModule)
  },
  {
    path: 'informer/:id',
    loadChildren: () => import('./informer/informer.module').then( m => m.InformerPageModule)
  },
  {
    path: 'message',
    loadChildren: () => import('./message/message.module').then( m => m.MessagePageModule)
  },
  {
    path: 'createmessage',
    loadChildren: () => import('./createmessage/createmessage.module').then( m => m.CreatemessagePageModule)
  },
  
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'num-comus',
    loadChildren: () => import('./num-comus/num-comus.module').then( m => m.NumComusPageModule)
  },
  {
    path: 'comusareat',
    loadChildren: () => import('./comisareat/comisareat.module').then( m => m.ComisareatPageModule)
  },
  {
    path: 'mobiles',
    loadChildren: () => import('./mobiles/mobiles.module').then( m => m.MobilesPageModule)
  },
  {
    path: 'language-popover',
    loadChildren: () => import('./pages/language-popover/language-popover.module').then( m => m.LanguagePopoverPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

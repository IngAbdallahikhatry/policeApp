import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { FormBuilder } from '@angular/forms';
import { HttpClient ,HttpClientModule } from '@angular/common/http';

import { Geolocation ,Geoposition} from '@ionic-native/geolocation/ngx'; 

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Network } from '@ionic-native/network/ngx';

import { Camera } from '@ionic-native/camera/ngx';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import {  NavParams } from '@ionic/angular';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {LanguagePopoverPageModule} from './pages/language-popover/language-popover.module'
import { IonicStorageModule } from '@ionic/storage';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/languages/', '.json');
}


@NgModule({
  declarations: [
    LoginPage,
    
    
    
    AppComponent],
  entryComponents: [


    LoginPage,
   
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
        TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    LanguagePopoverPageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    FormBuilder,
    Geolocation,
    AndroidPermissions,
    LocationAccuracy,
    NavParams,
    Camera,
    Network,
 
    SocialSharing,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

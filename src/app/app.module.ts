import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicImageLoader } from 'ionic-image-loader';

import { MyApp } from './app.component';

import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DeviceMotion } from '@ionic-native/device-motion';

import { DrinkProvider } from '../providers/drink/drink';
import { IngredientProvider } from '../providers/ingredient/ingredient';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    IonicImageLoader.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeviceMotion,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DrinkProvider,
    IngredientProvider
  ]
})
export class AppModule { }

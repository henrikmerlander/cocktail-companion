import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicImageLoader } from 'ionic-image-loader';

import { MyApp } from './app.component';

import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppRate } from '@ionic-native/app-rate';
import { DeviceMotion } from '@ionic-native/device-motion';

import { DrinkProvider } from '../providers/drink/drink';
import { IngredientProvider } from '../providers/ingredient/ingredient';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
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
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppRate,
    DeviceMotion,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DrinkProvider,
    IngredientProvider
  ]
})
export class AppModule {}

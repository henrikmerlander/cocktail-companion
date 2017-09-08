import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicImageLoader } from 'ionic-image-loader';

import { MyApp } from './app.component';

import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppRate } from '@ionic-native/app-rate';
import { DeviceMotion } from '@ionic-native/device-motion';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { StartupService } from './startup.service';

import { DrinkProvider } from '../providers/drink/drink';
import { IngredientProvider } from '../providers/ingredient/ingredient';
import { TabsPage } from '../pages/tabs/tabs';

function startupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}

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
    InAppBrowser,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DrinkProvider,
    IngredientProvider,
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [StartupService],
      multi: true
    }
  ]
})
export class AppModule { }

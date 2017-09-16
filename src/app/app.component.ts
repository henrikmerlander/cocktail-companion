import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ImageLoaderConfig } from 'ionic-image-loader';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';
  pages: Array<{ title: string, component: any, icon: string, params?: any }>;
  listPages: Array<{ title: string, component: any, icon: string, params?: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public imageLoaderConfig: ImageLoaderConfig) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: 'HomePage', icon: 'home' },
      { title: 'Search', component: 'SearchPage', icon: 'search' },
      { title: 'Info', component: 'InfoPage', icon: 'information-circle' }
    ];

    this.listPages = [
      { title: 'Alcoholic', component: 'DrinkListPage', icon: 'beer', params: { drinkType: 'alcoholic' } },
      { title: 'Non-alcoholic', component: 'DrinkListPage', icon: 'happy', params: { drinkType: 'non-alcoholic' } }
    ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.imageLoaderConfig.setFallbackUrl('assets/img/notfound.png');
      this.imageLoaderConfig.useImageTag(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, page.params);
  }
}

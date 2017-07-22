import { Component } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';
import { AppRate } from '@ionic-native/app-rate';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  isCordova: boolean = false;

  constructor(public platform: Platform, public appRate: AppRate) { }

  ionViewDidLoad() {
    this.isCordova = this.platform.is('cordova');
    if (this.isCordova) {
      this.platform
        .ready()
        .then(() => {
          this.appRate.preferences.storeAppURL = {
            android: 'market://details?id=com.henrikmerlander.cocktailcompanion'
          }
        })
    }
  }

  rateApp() {
    console.log(this.appRate.preferences)
    this.platform
      .ready()
      .then(() => this.appRate.promptForRating(true))
  }
}

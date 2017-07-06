import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  hideDrinksWithoutImages: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) { }

  ionViewDidLoad() {
    this.storage
      .get('HIDE_DRINKS_WITHOUT_IMAGES')
      .then(res => this.hideDrinksWithoutImages = res || false)
  }

  saveSettings() {
    this.storage.set('HIDE_DRINKS_WITHOUT_IMAGES', this.hideDrinksWithoutImages)
  }
}

import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DrinkProvider } from '../../providers/drink/drink';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  stars: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public drinkProvider: DrinkProvider) { }

  ionViewWillEnter() {
    this.stars = [];
    this.storage
      .get('STARS')
      .then(res => {
        res = res || []
        res.forEach(element => {
          this.drinkProvider
            .getDrinkById(element)
            .subscribe(res => this.stars.push(res.drinks[0]))
        });
      })
  }

  goToDrink(drinkId: string) {
    this.navCtrl.push('DrinkPage', {
      drinkId: drinkId
    });
  }
}

import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController } from 'ionic-angular';
import { DrinkProvider } from '../../providers/drink/drink';
import { Drink } from '../../models/drink';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  stars: Drink[] = [];
  starsLoaded: boolean = false;

  constructor(public navCtrl: NavController, public storage: Storage, public drinkProvider: DrinkProvider) { }

  ionViewWillEnter() {
    this.stars = [];

    this.storage
      .get('STARS')
      .then(res => {
        res = res || []
        if (res.length == 0) this.starsLoaded = true;
        res.forEach(element => {
          this.drinkProvider
            .getDrinkById(element)
            .subscribe(res => {
              this.starsLoaded = true;
              this.stars.push(res)
            })
        });
      });
  }

  navigateToRandomDrink() {
    this.drinkProvider
      .getRandomDrink()
      .subscribe(res => {
        this.navCtrl.push('DrinkPage', {
          drinkId: res.id
        })
      })
  }
}

import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage } from 'ionic-angular';
import { DrinkProvider } from '../../providers/drink/drink';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  stars: any[] = [];

  constructor(public storage: Storage, public drinkProvider: DrinkProvider) { }

  ionViewWillEnter() {
    this.stars = [];
    this.storage
      .get('STARS')
      .then(res => {
        res = res || []
        res.forEach(element => {
          this.drinkProvider
            .getDrinkById(element)
            .subscribe(res => this.stars.push(res))
        });
      })
  }
}

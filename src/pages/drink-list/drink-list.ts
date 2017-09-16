import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DrinkProvider } from '../../providers/drink/drink';

@IonicPage()
@Component({
  selector: 'page-drink-list',
  templateUrl: 'drink-list.html',
})
export class DrinkListPage {

  drinks: any[];
  drinkType: string;
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public drinkProvider: DrinkProvider) {
    this.drinkType = navParams.get('drinkType');
    this.title = (this.drinkType == 'alcoholic' ? 'Alcoholic' : 'Non-alcoholic') + ' drinks';
  }

  ionViewDidLoad() {
    if (this.drinkType == 'alcoholic')
      this.drinkProvider.getAlcoholicDrinks()
        .subscribe(res => this.drinks = res);
    else
      this.drinkProvider.getNonAlcoholicDrinks()
        .subscribe(res => this.drinks = res);
  }
}

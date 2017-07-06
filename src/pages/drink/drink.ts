import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DrinkProvider } from '../../providers/drink/drink';

@IonicPage()
@Component({
  selector: 'page-drink',
  templateUrl: 'drink.html',
})
export class DrinkPage {

  drink: any = {};
  drinkIngredients: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public drinkProvider: DrinkProvider) { }

  ionViewDidLoad() {
    this.drinkProvider
      .getDrinkById(this.navParams.get('drinkId') || '12528')
      .subscribe(res => {
        this.drink = res.drinks[0]
        for (var i = 1; i <= 15; i++) {
          let ingredient = this.drink['strIngredient' + i];
          if (!ingredient) break;

          this.drinkIngredients.push({
            name: ingredient,
            measure: this.drink['strMeasure' + i]
          })
        }
      })
  }

  goToIngredient(ingredientName) {
    this.navCtrl.push('IngredientPage', {
      ingredientName: ingredientName
    })
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IngredientProvider } from '../../providers/ingredient/ingredient';
import { DrinkProvider } from '../../providers/drink/drink';

@IonicPage()
@Component({
  selector: 'page-ingredient',
  templateUrl: 'ingredient.html',
})
export class IngredientPage {

  ingredient: any = {};
  drinks: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ingredientProvider: IngredientProvider, public drinkProvider: DrinkProvider) {
  }

  ionViewDidLoad() {
    this.ingredientProvider
      .getIngredientByName(this.navParams.get('ingredientName'))
      .subscribe(res => {
        this.ingredient = res.ingredients[0]
        this.drinkProvider
          .searchByIngredientName(this.ingredient.strIngredient)
          .subscribe(res => this.drinks = res.drinks)
      })
  }
}

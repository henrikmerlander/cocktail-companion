import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { IngredientProvider } from '../../providers/ingredient/ingredient';
import { DrinkProvider } from '../../providers/drink/drink';
import { Ingredient } from '../../models/ingredient';
import { Drink } from '../../models/drink';

@IonicPage()
@Component({
  selector: 'page-ingredient',
  templateUrl: 'ingredient.html',
})
export class IngredientPage {

  ingredient: Ingredient = new Ingredient('', '', '', '', '', '');
  drinks: Drink[] = [];

  constructor(public navParams: NavParams, public ingredientProvider: IngredientProvider, public drinkProvider: DrinkProvider) { }

  ionViewDidLoad() {
    this.ingredientProvider
      .getIngredientByName(this.navParams.get('ingredientName') || 'rum')
      .subscribe(res => {
        this.ingredient = res
        this.drinkProvider
          .getDrinksByIngredientName(this.ingredient.name)
          .subscribe(res => this.drinks = res)
      })
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IngredientProvider } from '../../providers/ingredient/ingredient';

@IonicPage()
@Component({
  selector: 'page-ingredient',
  templateUrl: 'ingredient.html',
})
export class IngredientPage {

  ingredient: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public ingredientProvider: IngredientProvider) {
  }

  ionViewDidLoad() {
    this.ingredientProvider
      .getIngredientByName(this.navParams.get('ingredientName') || 'Vodka')
      .subscribe(res => this.ingredient = res.ingredients[0])
  }
}

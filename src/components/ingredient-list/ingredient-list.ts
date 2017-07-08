import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'ingredient-list',
  templateUrl: 'ingredient-list.html'
})
export class IngredientListComponent {

  @Input()
  ingredients: any[];

  constructor(public navCtrl: NavController) { }

  goToIngredient(ingredientName) {
    this.navCtrl.push('IngredientPage', {
      ingredientName: ingredientName
    })
  }
}

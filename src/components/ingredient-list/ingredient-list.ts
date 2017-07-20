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

  ingredientParams(ingredientName) {
    return {
      ingredientName: ingredientName
    }
  }
}

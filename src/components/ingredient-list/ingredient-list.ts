import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ingredient } from '../../models/ingredient';

@Component({
  selector: 'ingredient-list',
  templateUrl: 'ingredient-list.html'
})
export class IngredientListComponent {

  @Input()
  ingredients: Ingredient[];

  constructor(public navCtrl: NavController) { }
}

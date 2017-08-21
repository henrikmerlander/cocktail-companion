import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DrinkProvider } from '../../providers/drink/drink';
import { IngredientProvider } from '../../providers/ingredient/ingredient';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchMode: string = 'drink';
  drinks: any[];
  ingredients: any[];

  constructor(public drinkProvider: DrinkProvider, public ingredientProvider: IngredientProvider) { }

  search(event) {
    var query = event.target.value;

    if (query) {
      if (this.searchMode == 'drink') {
        this.drinkProvider
          .getDrinksByName(query)
          .subscribe(res => this.drinks = res)
      }
      else {
        this.ingredientProvider
          .getIngredientsByName(query)
          .subscribe(res => this.ingredients = res)
      }
    }
  }
}

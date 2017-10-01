import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DrinkProvider } from '../../providers/drink/drink';
import { IngredientProvider } from '../../providers/ingredient/ingredient';
import { Ingredient } from '../../models/ingredient';
import { Drink } from '../../models/drink';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchMode: string = 'drink';
  drinks: Drink[];
  ingredients: Ingredient[];
  isSearching: boolean = false;

  constructor(public drinkProvider: DrinkProvider, public ingredientProvider: IngredientProvider) { }

  search(event) {
    var query = event.target.value;

    if (query) {
      this.isSearching = true;

      if (this.searchMode == 'drink') {
        this.drinkProvider
          .getDrinksByName(query)
          .subscribe(res => {
            this.isSearching = false;
            this.drinks = res;
          })
      }
      else {
        this.ingredientProvider
          .getIngredientsByName(query)
          .subscribe(res => {
            this.isSearching = false;
            this.ingredients = res;
          })
      }
    }
  }
}

import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';
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
  isSearching: boolean = false;

  constructor(public drinkProvider: DrinkProvider, public ingredientProvider: IngredientProvider, public loadingCtrl: LoadingController) { }

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

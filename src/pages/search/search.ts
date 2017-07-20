import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchMode: string = 'drink';
  drinks: any[];
  ingredients: any[];

  constructor(public searchProvider: SearchProvider) { }

  search(event) {
    var query = event.target.value;

    if (query) {
      if (this.searchMode == 'drink') {
        this.searchProvider
          .searchDrinksByName(query)
          .subscribe(res => this.drinks = res)
      }
      else {
        this.searchProvider
          .searchIngredientsByName(query)
          .subscribe(res => this.ingredients = res)
      }
    }
  }
}

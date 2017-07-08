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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  search(event) {
    var query = event.target.value;

    if (query) {
      if (this.searchMode == 'drink') {
        this.searchProvider
          .search(query)
          .subscribe(res => this.drinks = res.drinks)
      }
      else {
        this.searchProvider
          .searchIngredientByName(query)
          .subscribe(res => this.ingredients = res.ingredients)
      }
    }
  }
}

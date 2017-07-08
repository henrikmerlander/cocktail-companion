import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';
import { DrinkProvider } from '../../providers/drink/drink';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchMode: string = 'drink';
  drinks: any[];
  ingredients: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public searchProvider: SearchProvider) { }

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

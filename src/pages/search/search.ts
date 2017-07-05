import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchResults: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public searchProvider: SearchProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  search(event) {
    var query = event.target.value;

    if (query) {
      this.searchProvider
        .search(query)
        .subscribe(res => this.searchResults = res.drinks)
    }
    else {
      this.searchResults = [];
    }
  }
}

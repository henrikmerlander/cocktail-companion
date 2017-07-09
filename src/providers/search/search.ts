import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'RxJS';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchProvider {

  constructor(public http: Http) {
    console.log('Hello SearchProvider Provider');
  }

  searchDrinksByName(query: string):Observable<any[]> {
    return this.http
      .get('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + query)
      .map(res => res.json().drinks)
  }

  searchIngredientsByName(query: string):Observable<any[]> {
    return this.http
      .get('http://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + query)
      .map(res => res.json().ingredients)
  }
}

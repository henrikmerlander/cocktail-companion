import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'RxJS';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchProvider {

  constructor(public http: Http) { }

  searchDrinksByName(query: string): Observable<any[]> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/drinks/search?drinkName=' + query)
      .map(res => res.json().drinks)
  }

  searchIngredientsByName(query: string): Observable<any[]> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/ingredients/search?ingredientName=' + query)
      .map(res => res.json().ingredients)
  }
}

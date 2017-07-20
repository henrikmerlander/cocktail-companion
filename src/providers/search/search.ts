import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'RxJS';
import 'rxjs/add/operator/map';
import { appsettings } from '../../app/appsettings';

@Injectable()
export class SearchProvider {

  constructor(public http: Http) { }

  searchDrinksByName(query: string): Observable<any[]> {
    return this.http
      .get('http://www.thecocktaildb.com/api/json/v1/' + appsettings.api_key + '/search.php?s=' + query)
      .map(res => res.json().drinks)
  }

  searchIngredientsByName(query: string): Observable<any[]> {
    return this.http
      .get('http://www.thecocktaildb.com/api/json/v1/' + appsettings.api_key + '/search.php?i=' + query)
      .map(res => res.json().ingredients)
  }
}

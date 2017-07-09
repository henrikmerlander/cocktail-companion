import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'RxJS';
import 'rxjs/add/operator/map';

@Injectable()
export class DrinkProvider {

  constructor(public http: Http) { }

  getDrinkById(drinkId: string): Observable<any> {
    return this.http
      .get('http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + drinkId)
      .map(res => res.json().drinks[0])
  }

  getDrinksByIngredientName(ingredientName: string): Observable<any[]> {
    return this.http
      .get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredientName)
      .map(res => res.json().drinks)
  }
}

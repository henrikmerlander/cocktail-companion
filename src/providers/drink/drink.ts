import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'RxJS';
import 'rxjs/add/operator/map';
import { appsettings } from '../../app/appsettings';

@Injectable()
export class DrinkProvider {

  constructor(public http: Http) { }

  getDrinkById(drinkId: string): Observable<any> {
    return this.http
      .get('http://www.thecocktaildb.com/api/json/v1/' + appsettings.api_key + '/lookup.php?i=' + drinkId)
      .map(res => res.json().drinks[0])
  }

  getDrinksByIngredientName(ingredientName: string): Observable<any[]> {
    return this.http
      .get('http://www.thecocktaildb.com/api/json/v1/' + appsettings.api_key + '/filter.php?i=' + ingredientName)
      .map(res => res.json().drinks)
  }

  getRandomDrink() {
    return this.http
      .get('http://www.thecocktaildb.com/api/json/v1/' + appsettings.api_key + '/random.php')
      .map(res => res.json().drinks[0])
  }
}

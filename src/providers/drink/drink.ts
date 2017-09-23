import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'RxJS';
import 'rxjs/add/operator/map';

@Injectable()
export class DrinkProvider {

  constructor(public http: Http) { }

  getDrinkById(drinkId: string): Observable<any> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/drinks/lookup?drinkId=' + drinkId)
      .map(res => res.json().drinks[0] || {})
  }

  getDrinksByIngredientName(ingredientName: string): Observable<any[]> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/drinks/filter?ingredientName=' + ingredientName)
      .map(res => res.json().drinks || [])
  }

  getDrinksByName(drinkName: string): Observable<any[]> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/drinks/search?drinkName=' + drinkName)
      .map(res => res.json().drinks || [])
  }

  getRandomDrink() {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/drinks/random')
      .map(res => res.json().drinks[0] || {})
  }

  getAlcoholicDrinks() {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/drinks/alcoholic')
      .map(res => res.json().drinks || [])
  }

  getNonAlcoholicDrinks() {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/drinks/non-alcoholic')
      .map(res => res.json().drinks || [])
  }
}

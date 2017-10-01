import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'RxJS';
import 'rxjs/add/operator/map';
import { Drink } from '../../models/drink';
import { DrinkIngredient } from '../../models/drinkIngredient';

@Injectable()
export class DrinkProvider {

  constructor(public http: Http) { }

  getDrinkById(drinkId: string): Observable<Drink> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/drinks/lookup?drinkId=' + drinkId)
      .map(res => this.normalizeData(res.json().drinks[0] || {}))
  }

  getDrinksByIngredientName(ingredientName: string): Observable<Drink[]> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/drinks/filter?ingredientName=' + ingredientName)
      .map(res => (res.json().drinks || []).map(drink => this.normalizeData(drink)))
  }

  getDrinksByName(drinkName: string): Observable<Drink[]> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/drinks/search?drinkName=' + drinkName)
      .map(res => (res.json().drinks || []).map(drink => this.normalizeData(drink)))
  }

  getRandomDrink(): Observable<Drink> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/drinks/random')
      .map(res => this.normalizeData(res.json().drinks[0] || {}))
  }

  getAlcoholicDrinks(): Observable<Drink[]> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/drinks/alcoholic')
      .map(res => (res.json().drinks || []).map(drink => this.normalizeData(drink)))
  }

  getNonAlcoholicDrinks(): Observable<Drink[]> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/drinks/non-alcoholic')
      .map(res => (res.json().drinks || []).map(drink => this.normalizeData(drink)))
  }

  normalizeData(drink: any): Drink {
    const { idDrink, strDrink, strCategory, strAlcoholic, strGlass, strInstructions, strDrinkThumb } = drink;

    const ingredients: DrinkIngredient[] = [];
    for (let i = 1; i <= 15; i++) {
      if (!drink['strIngredient' + i]) break;
      ingredients.push(new DrinkIngredient(drink['strIngredient' + i], drink['strMeasure' + i]));
    }

    return new Drink(
      idDrink,
      strDrink,
      strCategory,
      strAlcoholic === 'Alcoholic',
      strGlass,
      strInstructions,
      strDrinkThumb,
      ingredients
    )
  }
}

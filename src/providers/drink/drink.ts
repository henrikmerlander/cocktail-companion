import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'RxJS';
import { map } from 'rxjs/operators/map';
import { Drink } from '../../models/drink';
import { DrinkIngredient } from '../../models/drinkIngredient';

@Injectable()
export class DrinkProvider {

  constructor(public http: Http) { }

  getDrinkById(drinkId: string): Observable<Drink> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/drinks/lookup?drinkId=' + drinkId)
      .pipe(map(res => this.normalizeData(res.json().drinks[0] || {})))
  }

  getDrinksByIngredientName(ingredientName: string): Observable<Drink[]> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/drinks/filter?ingredientName=' + ingredientName)
      .pipe(map(res => (res.json().drinks || []).map(drink => this.normalizeData(drink))))
  }

  getDrinksByName(drinkName: string): Observable<Drink[]> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/drinks/search?drinkName=' + drinkName)
      .pipe(map(res => (res.json().drinks || []).map(drink => this.normalizeData(drink))))
  }

  getRandomDrink(): Observable<Drink> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/drinks/random')
      .pipe(map(res => this.normalizeData(res.json().drinks[0] || {})))
  }

  getAlcoholicDrinks(): Observable<Drink[]> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/drinks/alcoholic')
      .pipe(map(res => (res.json().drinks || []).map(drink => this.normalizeData(drink))))
  }

  getNonAlcoholicDrinks(): Observable<Drink[]> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/drinks/non-alcoholic')
      .pipe(map(res => (res.json().drinks || []).map(drink => this.normalizeData(drink))))
  }

  normalizeData(drink: any): Drink {
    const { idDrink, strDrink, strCategory, strAlcoholic, strGlass, strInstructions, strDrinkThumb } = drink;

    const ingredients: DrinkIngredient[] = [];
    for (let i = 1; i <= 15; i++) {
      if (!drink['strIngredient' + i]) break;
      ingredients.push(new DrinkIngredient(drink['strIngredient' + i], drink['strMeasure' + i], 'http://www.thecocktaildb.com/images/ingredients/' + drink['strIngredient' + i] + '-Small.png'));
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

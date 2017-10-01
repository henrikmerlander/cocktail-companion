import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'RxJS';
import 'rxjs/add/operator/map';
import { Ingredient } from '../../models/ingredient';

@Injectable()
export class IngredientProvider {

  constructor(public http: Http) { }

  getIngredientByName(ingredientName: string): Observable<Ingredient> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/ingredients/search?ingredientName=' + ingredientName)
      .map(res => this.normalizeData(res.json().ingredients[0] || {}))
  }

  getIngredientsByName(ingredientName: string): Observable<Ingredient[]> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/ingredients/search?ingredientName=' + ingredientName)
      .map(res => (res.json().ingredients || []).map(ingredient => this.normalizeData(ingredient)))
  }

  normalizeData(ingredient: any): Ingredient {
    const { idIngredient, strIngredient, strDescription, strType } = ingredient;

    return new Ingredient(
      idIngredient,
      strIngredient,
      strDescription,
      strType,
      'http://www.thecocktaildb.com/images/ingredients/' + strIngredient + '-Small.png',
      'http://www.thecocktaildb.com/images/ingredients/' + strIngredient + '-Medium.png'
    );
  }
}

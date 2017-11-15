import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'RxJS';
import { map } from 'rxjs/operators/map';
import { Ingredient } from '../../models/ingredient';

@Injectable()
export class IngredientProvider {

  constructor(public http: HttpClient) { }

  getIngredientByName(ingredientName: string): Observable<Ingredient> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/ingredients/search?ingredientName=' + ingredientName)
      .pipe(map(res => this.normalizeData(res['ingredients'][0] || {})))
  }

  getIngredientsByName(ingredientName: string): Observable<Ingredient[]> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/ingredients/search?ingredientName=' + ingredientName)
      .pipe(map(res => (res['ingredients'] || []).map(ingredient => this.normalizeData(ingredient))))
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

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'RxJS';
import 'rxjs/add/operator/map';

@Injectable()
export class IngredientProvider {

  constructor(public http: Http) { }

  getIngredientByName(ingredientName: string): Observable<any> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/ingredients/search?ingredientName=' + ingredientName)
      .map(res => res.json().ingredients[0])
  }

  getIngredientsByName(ingredientName: string): Observable<any[]> {
    return this.http
      .get('https://drinks-api.herokuapp.com/api/ingredients/search?ingredientName=' + ingredientName)
      .map(res => res.json().ingredients)
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'RxJS';
import 'rxjs/add/operator/map';

@Injectable()
export class IngredientProvider {

  constructor(public http: Http) { }

  getIngredientByName(ingredientName: string): Observable<any> {
    return this.http
      .get('http://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + ingredientName)
      .map(res => res.json().ingredients)
  }
}

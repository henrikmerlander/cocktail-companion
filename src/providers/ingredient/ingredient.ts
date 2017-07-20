import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'RxJS';
import 'rxjs/add/operator/map';
import { appsettings } from '../../app/appsettings';

@Injectable()
export class IngredientProvider {

  constructor(public http: Http) { }

  getIngredientByName(ingredientName: string): Observable<any> {
    return this.http
      .get('http://www.thecocktaildb.com/api/json/v1/' + appsettings.api_key + '/search.php?i=' + ingredientName)
      .map(res => res.json().ingredients[0])
  }
}

import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DrinkProvider } from '../../providers/drink/drink';

@IonicPage()
@Component({
  selector: 'page-drink',
  templateUrl: 'drink.html',
})
export class DrinkPage {

  drink: any = {};
  drinkIngredients: any[] = [];
  isStarred: boolean = false;
  stars: any[] = [];
  measurement: string = 'metric';

  constructor(public navCtrl: NavController, public navParams: NavParams, public drinkProvider: DrinkProvider, public storage: Storage) { }

  ionViewDidLoad() {
    this.storage
      .get('STARS')
      .then(res => {
        this.stars = res || []
        if (this.stars.indexOf(this.navParams.get('drinkId')) > -1) this.isStarred = true
      })

    this.drinkProvider
      .getDrinkById(this.navParams.get('drinkId'))
      .subscribe(res => {
        this.drink = res
        for (var i = 1; i <= 15; i++) {
          let ingredient = this.drink['strIngredient' + i];
          if (!ingredient) break;

          this.drinkIngredients.push({
            name: ingredient,
            measure: this.drink['strMeasure' + i]
          })
        }
      })
  }

  goToIngredient(ingredientName) {
    this.navCtrl.push('IngredientPage', {
      ingredientName: ingredientName
    })
  }

  toggleStarred(drinkId: string) {
    if (this.isStarred) {
      this.stars.splice(this.stars.indexOf(this.drink.idDrink), 1)
    }
    else {
      this.stars.push(drinkId)
    }

    this.isStarred = !this.isStarred;
    this.storage.set('STARS', this.stars);
  }
}

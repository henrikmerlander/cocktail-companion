import { Component, Input, IterableDiffers } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Drink } from '../../models/drink';

@Component({
  selector: 'drink-list',
  templateUrl: 'drink-list.html'
})
export class DrinkListComponent {

  @Input()
  drinks: Drink[];

  displayDrinks: Drink[] = [];
  iterableDiffer;

  constructor(private iterableDiffers: IterableDiffers, public navCtrl: NavController) {
    this.iterableDiffer = this.iterableDiffers.find([]).create(null);
  }

  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.drinks);
    if (changes) {
      this.drinks = changes.collection;
      this.displayDrinks = this.drinks.slice(0, 20);
    }
  }

  showMoreDrinks(infinite) {
    this.displayDrinks = this.displayDrinks.concat(this.drinks.slice(this.displayDrinks.length, this.displayDrinks.length + 20))
    infinite.complete()
  }
}

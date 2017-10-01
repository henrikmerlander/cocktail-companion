import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Drink } from '../../models/drink';

@Component({
  selector: 'drink-list',
  templateUrl: 'drink-list.html'
})
export class DrinkListComponent {

  @Input()
  set drinks(drinks: Drink[]) {
    this.allDrinks = drinks || [];
    this.displayDrinks = this.allDrinks.slice(0, 10);
  }

  allDrinks: Drink[];
  displayDrinks: Drink[];

  constructor(public navCtrl: NavController) { }

  showMoreDrinks(infinite) {
    this.displayDrinks = this.displayDrinks.concat(this.allDrinks.slice(this.displayDrinks.length, this.displayDrinks.length + 10))
    infinite.complete()
  }
}

import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'drink-list',
  templateUrl: 'drink-list.html'
})
export class DrinkListComponent {

  @Input()
  set drinks(drinks: any[]) {
    this.allDrinks = drinks || [];
    this.displayDrinks = this.allDrinks.slice(0, 10);    
  }

  allDrinks: any[];
  displayDrinks: any[];

  constructor(public navCtrl: NavController) { }

  drinkParams(drinkId) {
    return {
      drinkId: drinkId
    }
  }

  showMoreDrinks(infinite) {
    this.displayDrinks = this.displayDrinks.concat(this.allDrinks.slice(this.displayDrinks.length, this.displayDrinks.length + 10))
    infinite.complete()
  }
}

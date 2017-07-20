import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'drink-list',
  templateUrl: 'drink-list.html'
})
export class DrinkListComponent {

  @Input()
  drinks: any[];

  constructor(public navCtrl: NavController) { }

  drinkParams(drinkId) {
    return {
      drinkId: drinkId
    }
  }
}

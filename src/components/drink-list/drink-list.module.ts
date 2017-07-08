import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DrinkListComponent } from './drink-list';

@NgModule({
  declarations: [
    DrinkListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    DrinkListComponent
  ]
})
export class DrinkListComponentModule {}

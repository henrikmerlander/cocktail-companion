import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IngredientPage } from './ingredient';

@NgModule({
  declarations: [
    IngredientPage,
  ],
  imports: [
    IonicPageModule.forChild(IngredientPage),
  ],
  exports: [
    IngredientPage
  ]
})
export class IngredientPageModule {}

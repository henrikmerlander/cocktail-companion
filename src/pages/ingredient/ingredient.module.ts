import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IngredientPage } from './ingredient';
import { DrinkListComponentModule } from '../../components/drink-list/drink-list.module';

@NgModule({
  declarations: [
    IngredientPage,
  ],
  imports: [
    DrinkListComponentModule,
    IonicPageModule.forChild(IngredientPage)
  ],
  exports: [
    IngredientPage
  ]
})
export class IngredientPageModule { }

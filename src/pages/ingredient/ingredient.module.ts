import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IngredientPage } from './ingredient';
import { DrinkListComponentModule } from '../../components/drink-list/drink-list.module';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    IngredientPage,
  ],
  imports: [
    DrinkListComponentModule,
    IonicPageModule.forChild(IngredientPage),
    IonicImageLoader
  ],
  exports: [
    IngredientPage
  ]
})
export class IngredientPageModule { }

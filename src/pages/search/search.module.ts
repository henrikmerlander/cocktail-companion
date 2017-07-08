import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';
import { DrinkListComponentModule } from '../../components/drink-list/drink-list.module';
import { IngredientListComponentModule } from '../../components/ingredient-list/ingredient-list.module';

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    DrinkListComponentModule,
    IngredientListComponentModule,
    IonicPageModule.forChild(SearchPage),
  ],
  exports: [
    SearchPage
  ]
})
export class SearchPageModule {}

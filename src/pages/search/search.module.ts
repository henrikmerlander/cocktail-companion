import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchPage } from './search';
import { DrinkListComponentModule } from '../../components/drink-list/drink-list.module';

@NgModule({
  declarations: [
    SearchPage,
  ],
  imports: [
    DrinkListComponentModule,
    IonicPageModule.forChild(SearchPage),
  ],
  exports: [
    SearchPage
  ]
})
export class SearchPageModule {}

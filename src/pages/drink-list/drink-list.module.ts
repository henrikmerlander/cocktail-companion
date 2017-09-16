import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrinkListPage } from './drink-list';
import { DrinkListComponentModule } from '../../components/drink-list/drink-list.module';

@NgModule({
  declarations: [
    DrinkListPage,
  ],
  imports: [
    DrinkListComponentModule,
    IonicPageModule.forChild(DrinkListPage),
  ],
})
export class DrinkListPageModule {}

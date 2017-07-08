import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { DrinkListComponentModule } from '../../components/drink-list/drink-list.module';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    DrinkListComponentModule,
    IonicPageModule.forChild(HomePage)
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule { }

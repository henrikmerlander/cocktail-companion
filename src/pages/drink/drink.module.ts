import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrinkPage } from './drink';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    DrinkPage
  ],
  imports: [
    IonicPageModule.forChild(DrinkPage),
    IonicImageLoader
  ],
  exports: [
    DrinkPage
  ]
})
export class DrinkPageModule {}

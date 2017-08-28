import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrinkPage } from './drink';
import { IonicImageLoader } from 'ionic-image-loader';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    DrinkPage
  ],
  imports: [
    IonicPageModule.forChild(DrinkPage),
    IonicImageLoader,
    PipesModule
  ],
  exports: [
    DrinkPage
  ]
})
export class DrinkPageModule {}

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DrinkListComponent } from './drink-list';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    DrinkListComponent,
  ],
  imports: [
    IonicModule,
    IonicImageLoader
  ],
  exports: [
    DrinkListComponent
  ]
})
export class DrinkListComponentModule {}

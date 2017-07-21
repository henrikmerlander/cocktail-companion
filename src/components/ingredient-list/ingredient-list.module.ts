import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IngredientListComponent } from './ingredient-list';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    IngredientListComponent,
  ],
  imports: [
    IonicModule,
    IonicImageLoader
  ],
  exports: [
    IngredientListComponent
  ]
})
export class IngredientListComponentModule {}

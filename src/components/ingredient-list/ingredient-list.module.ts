import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IngredientListComponent } from './ingredient-list';

@NgModule({
  declarations: [
    IngredientListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    IngredientListComponent
  ]
})
export class IngredientListComponentModule {}

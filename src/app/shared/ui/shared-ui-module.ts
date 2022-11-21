import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports:[RouterModule],
  exports:[
    CardComponent
  ]

})
export class SharedUiModule { }

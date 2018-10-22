import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DividePage } from './divide';

@NgModule({
  declarations: [
    DividePage,
  ],
  imports: [
    IonicPageModule.forChild(DividePage),
  ],
})
export class DividePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FourthModule} from '../fourth/fourth.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';



@NgModule({
  declarations: [FirstComponent, SecondComponent],
  exports: [
    FirstComponent
  ],
  imports: [
    CommonModule,
    FourthModule
  ]
})
export class ThirdModule { }

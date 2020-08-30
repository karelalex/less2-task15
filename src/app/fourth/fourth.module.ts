import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FifthModule} from '../fifth/fifth.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';



@NgModule({
  declarations: [FirstComponent, SecondComponent, ThirdComponent],
  exports: [
    FirstComponent
  ],
  imports: [
    CommonModule,
    FifthModule
  ]
})
export class FourthModule { }

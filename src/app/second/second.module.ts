import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import {ThirdModule} from '../third/third.module';



@NgModule({
  declarations: [FirstComponent],
  exports: [
    FirstComponent
  ],
  imports: [
    CommonModule,
    ThirdModule
  ]
})
export class SecondModule { }

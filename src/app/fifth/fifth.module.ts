import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';



@NgModule({
  declarations: [FirstComponent, SecondComponent, ThirdComponent, FourthComponent, FifthComponent],
  imports: [
    CommonModule
  ],
  exports: [FirstComponent]
})
export class FifthModule { }

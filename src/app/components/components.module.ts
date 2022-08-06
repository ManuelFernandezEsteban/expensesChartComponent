import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCardComponent } from './header-card/header-card.component';
import { ExpensesComponentComponent } from './expenses-component/expenses-component.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { TotalMonthComponentComponent } from './total-month-component/total-month-component.component';
import { BarsComponentComponent } from './bars-component/bars-component.component';
import { BarComponentComponent } from './bar-component/bar-component.component';

@NgModule({
  declarations: [  
    HeaderCardComponent, ExpensesComponentComponent, CardComponentComponent, TotalMonthComponentComponent, BarsComponentComponent, BarComponentComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    ExpensesComponentComponent
  ]

})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoListComponent } from './todo-list.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    FormsModule,
    TableModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    TabViewModule,
    RadioButtonModule,
    CalendarModule,
    ButtonModule,
    RippleModule,
  ],
  exports:[TodoListComponent]
})
export class TodoListModule { }

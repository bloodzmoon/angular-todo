import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoComponent } from './todo.component';
import {
  AppInputComponent,
  AppButtonComponent,
  TodoListComponent,
} from '../../components';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    TodoComponent,
    AppInputComponent,
    AppButtonComponent,
    TodoListComponent,
  ],
})
export class TodoModule {}

import { Component } from '@angular/core';

import { TodoService } from '../../services';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  public newTodo: string = '';

  constructor(private todoService: TodoService) {}

  onSubmit() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = '';
  }
}

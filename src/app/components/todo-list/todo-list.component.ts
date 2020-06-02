import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/models';
import { TodoService } from '../../services';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  public todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  onClick($event) {
    this.todoService.toggleTodo($event.target.dataset.value);
  }

  handleDelete($event) {
    this.todoService.delTodo($event.target.dataset.value);
  }
}

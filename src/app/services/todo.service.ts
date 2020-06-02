import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Todo } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];

  constructor() {
    const data = localStorage.getItem('angular-todo');
    this.todos = data ? JSON.parse(data) : [];
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(newTodo: string) {
    this.todos.push({
      id: uuid(),
      done: false,
      task: newTodo,
    });
    this.saveTodoInLocalStorage();
  }

  toggleTodo(id) {
    this.todos.forEach((todo) =>
      todo.id.toString() === id.toString() ? (todo.done = !todo.done) : null
    );
    this.saveTodoInLocalStorage();
  }

  delTodo(id) {
    let indexToDelete;
    this.todos.forEach((todo, index) =>
      todo.id.toString() === id.toString() ? (indexToDelete = index) : null
    );
    this.todos.splice(indexToDelete, 1);
    this.saveTodoInLocalStorage();
  }

  saveTodoInLocalStorage() {
    localStorage.setItem('angular-todo', JSON.stringify(this.todos));
  }
}

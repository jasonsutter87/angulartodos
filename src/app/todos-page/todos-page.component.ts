import {Component, OnInit} from '@angular/core';

interface Todo {
  date: string;
  todoText: string;
  id: number;
}

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent implements OnInit {
 constructor() {
  }
  todos: Todo[] = [
  ];

  todoInput = '';

  pageTitle = 'My Angular Todo Page';

  deleteTodo(id) {
    const todoitem = this.todos.find((x) => x.id === id);
    const todoitemIndex = this.todos.indexOf(todoitem);
    this.todos.splice(todoitemIndex, 1);
  }

  public onSubmit() {
    const date: string = Date.now();
    let id: 0;

    if (this.todos.length < 1) {
      this.id = 0;
    } else {
      this.id =  this.todos[this.todos.length - 1].id + 1;
    }

    const newTodo: Todo = {
      id: this.id,
      date,
      todoText: this.todoInput
    };
    this.todos.push(newTodo);
    console.log(newTodo);

    this.todoInput = '';

  }

  ngOnInit() {
  }
}

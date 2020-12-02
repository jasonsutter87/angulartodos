import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


interface Todo {
  id: number;
  date: string;
  todoText: string;
}

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})

export class TodosPageComponent implements OnInit {
  private id: number;
  private date: any = Date.now();
  private todoForm: FormGroup;
  constructor() {
  }

  todos: Todo[] = [];
  pageTitle = 'My Angular Todo Page';

  deleteTodo(id) {
    const todoitem = this.todos.find((x) => x.id === id);
    const todoitemIndex = this.todos.indexOf(todoitem);
    this.todos.splice(todoitemIndex, 1);
  }

  ngOnInit() {
    this.todoForm = new FormGroup({
      todoInput: new FormControl()
    })
  }

  public onSubmit() {
    if (this.todos.length < 1) {
      this.id = 0;
    } else {
      this.id =  this.todos[this.todos.length - 1].id + 1;
    }

    const newTodo: Todo = {
      id: this.id,
      date: this.date,
      todoText:  this.todoForm.value.todoInput
    };


    this.todos.push(newTodo);
    this.todoForm.reset();
  }




}

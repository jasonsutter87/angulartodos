import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {todos} from './todos';
@Component({
  selector: 'app-todos-details',
  templateUrl: './todos-details.component.html',
  styleUrls: ['./todos-details.component.scss']
})
export class TodosDetailsComponent implements OnInit {

  constructor() { }
  @Input() todos = todos;
  @Output() deleteTodo = new EventEmitter();

  removeTodo(id) {
    this.deleteTodo.emit(this.todos[id].id);
  }

  ngOnInit() {
  }

}

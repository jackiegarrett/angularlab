import { Component, OnInit } from '@angular/core';
import { Todo } from './../interface/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  todos: Todo[] = [
    {task: 'Work on Angular Lab', completed: false},
    {task: 'Take a walk', completed: false},
    {task: 'Cuddle my cat', completed: true},
    {task: 'Make lunch', completed: false},
    {task: 'Call a friend', completed: false},
    {task: 'Buy new shoes', completed: true}
  ]

  searchText:string ="";
  newItem: string = "";
  search : string;
  originalTodos:Todo[] = this.todos;

  Search = ():void => {
    if (this.search.trim() !== "") {
      this.todos = this.todos.filter(res=>{
        return res.task.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
      })
    } else if (this.search.trim() === "") {
      this.ngOnInit();
      this.todos = this.originalTodos;
    }
    
  }

  clickComplete = (i: number): void => {
    this.todos[i].completed = true;
  }

  handleClick = ():void => {
    if (this.newItem !== "") {
      this.todos.push({
        task: this.newItem,
        completed: false
      })
      this.newItem = "";
    }
  }

  deleteClick = (i: number):void => {
    this.todos.splice(i, 1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

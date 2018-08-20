import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../classes/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  private todo: Todo;
  public deleteID = new Array();
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  private removeTodo(id:any) {
    this.todoService.removeTodo(id);
  }
  //get key of checked checkbox
  check(category: any, event: any) {
    // console.log(event);
   var index = this.deleteID.indexOf(event.target.value);
  if (event.target.checked) {
    this.deleteID.push(event.target.value);
  } else {
    if (index !== -1) {
      this.deleteID.splice(index, 1);
    }
  }

   }

  //delete all checked item
  deleteTodoAll() {
  // console.log(this.deleteID);
    this.deleteID.forEach((element: any) => {
      this.todoService.removeTodo(element);
    });
  }


}

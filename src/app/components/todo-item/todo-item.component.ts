import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  private todo: Todo;
  public deleteID = [];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.deleteID = new Array();
  }

  private removeTodo(): void {
    this.todoService.removeTodo(this.todo.id);
  }
  //get key of checked checkbox
  check(category: any, event: any) {
   // console.log(event);

    if (event.target.checked) {

      this.deleteID.push(event.target.value);
      console.log(this.deleteID);
    }

  }

  //delete all checked item
  deleteTodoAll() {
   console.log(this.deleteID);
    // this.deleteid.forEach((element: any) => {
    //   this.invoiceService.deleteInvoice(element);
    // });
  }

}

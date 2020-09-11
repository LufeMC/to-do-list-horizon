import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { ItemComponent } from './item/item.component'
import { JSONPlaceholderService } from '../service/jsonplaceholder.service'
import { Todo } from '../todos';

@Component({
  selector: 'app-td-list',
  templateUrl: './td-list.component.html',
  styleUrls: ['./td-list.component.css']
})
export class TdListComponent implements OnInit {

  @Input() todos_var;
  @Output() EventDelete = new EventEmitter<any>();

  constructor(private dialog: MatDialog,
    private JSONPlaceholder:JSONPlaceholderService) { }

  ngOnInit(): void {
  	console.log(this.todos_var);
  }

  getDataFromDB() {
    this.JSONPlaceholder.getAllData().subscribe((data) => {
      console.log(data);
      this.todos_var = data;
    })
  }

  checkValue(values:any, todo) {
    console.log(values.currentTarget.checked);
    console.log(todo.id);  
    const to_do = new Todo(todo.id, todo.title, todo._id, todo.time, values.currentTarget.checked, todo.link);
    console.log(todo._id);
    this.JSONPlaceholder.updateData(todo._id, (to_do)).subscribe((data) => {
      console.log(data);
    })
  }

  deleteItem(todo) {
    const value = todo.id;
    this.JSONPlaceholder.deleteData(todo._id).subscribe((data) => {
      console.log(data);

      this.todos_var.splice(todo.id-1, 1);

      console.log(this.todos_var);
      
      for (const item of this.todos_var) {
        if (item.id > todo.id) {
          item.id--;
        }
      }

      this.JSONPlaceholder.getAllData().subscribe((data) => {
        for (const item of data) {
          if (item.id > value) {
            const new_to_do = new Todo((item.id-1), item.title, item._id, item.time, item.completed, item.link);
            console.log(new_to_do)
            this.JSONPlaceholder.updateData(item._id, (new_to_do)).subscribe((data) => {
              console.log(data);
            })
          }
        }
      })
    });
    
  }
  
  editItem(todo) {

    const dialogRef1 = this.dialog.open(ItemComponent, {
      maxHeight: '120%',
      width: "200%",
      data: {
      item: todo.title,
      time: todo.time,
      id: todo.id,
      link: todo.link,
      _id: todo._id,
      completed: todo.completed},
      panelClass: "ItemDialog"
    });

    dialogRef1.afterClosed().subscribe(result => {
      if (result.data[1] !== "noitemwasinserted" && result.data[1] !== "theuserdidntputanyvalues") {
        console.log(result.data[4]);
        const to_do = new Todo(result.data[0], result.data[1], result.data[4], result.data[2], result.data[5], result.data[3])
        this.JSONPlaceholder.updateData(result.data[4], (to_do)).subscribe((data) => {
          console.log(data);
        })
        this.getDataFromDB();
      } else if (result.data[1] === "theuserdidntputanyvalues") {
        window.alert("Por favor, escreva o nome do item")
      } else {
        console.log("CLOSED")
      }

      this.getDataFromDB();
    })
  }

}

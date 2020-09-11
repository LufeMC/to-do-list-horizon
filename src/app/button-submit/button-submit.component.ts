import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todos';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { ItemAddComponent } from './item-add/item-add.component'
import { JSONPlaceholderService } from '../service/jsonplaceholder.service'

@Component({
  selector: 'app-button-submit',
  templateUrl: './button-submit.component.html',
  styleUrls: ['./button-submit.component.css']
})
export class ButtonSubmitComponent implements OnInit {

  item:string;
  time:string;
  todos:Array<any>
  todo_item;

  constructor(private dialog: MatDialog,
    private JSONPlaceholder:JSONPlaceholderService) {
    this.todos = new Array<any>();
  }

//GETTING ALL TODOS FROM DATABASE
  getDataFromDB() {
    this.JSONPlaceholder.getAllData().subscribe((data) => {
      console.log(data);
      this.todos = data;
    })
  }

  ngOnInit(): void {
    this.getDataFromDB();
  }

  openAdd() {
    console.log(this.todos);
    const dialogRefThis = this.dialog.open(ItemAddComponent, {
      maxHeight: '120%',
      width: "200%",
      panelClass: "ItemDialog"
    });

    dialogRefThis.afterClosed().subscribe(result => {
      console.log("The dialog was closed", result);
      this.item = result.data[0];
      this.time = result.data[1];
      console.log(this.item, this.time);

      if (result.data[0] !== "thisscreenwasclosedbytheuser" && result.data[0] !== "theuserdidntputanyvalues") {
        if (this.todos.length === 0) {
          const to_do = new Todo(1, result.data[0], "", result.data[1], false, result.data[2]);
          this.JSONPlaceholder.addData(to_do).subscribe((data) => {
            console.log(data);
          })
          this.getDataFromDB();
          console.log(this.todos);
        } else {
          console.log(this.todos);
          const to_do = new Todo(this.todos[this.todos.length - 1].id + 1, result.data[0], "", result.data[1], false, result.data[2]);
          this.JSONPlaceholder.addData(to_do).subscribe((data) => {
            console.log(data);
          })
          this.getDataFromDB();
        }
      } else if (result.data[0] === "theuserdidntputanyvalues") {
        window.alert("Por favor, escreva o nome do item")
      }

      this.getDataFromDB();

    })
    
  }
}

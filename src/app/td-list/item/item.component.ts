import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item:string = "";
  time:string = "";
  id:number;
  link:string;
  _id:string;
  completed: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  	public dialogRef1: MatDialogRef<ItemComponent>)
  {
  	this.item = data.item;
  	this.time = data.time;
  	this.id = data.id;
    this.link = data.link;
    this._id = data._id;
    this.completed = data.completed;
  }

  ngOnInit(): void {
  }

  editar() {
  	if (this.item !== "") {
      this.dialogRef1.close({event:"close", data: [this.id, this.item, this.time, this.link, this._id, this.completed]});
    } else if (this.item[0] === " " || this.item === "") {
      this.dialogRef1.close({event:"close", data: ["", "theuserdidntputanyvalues", "", "", "", false]});
    }
  }

  cancelar() {
    this.dialogRef1.close({event:"close", data: [9, "noitemwasinserted", "", "", "", false]});
  }

}

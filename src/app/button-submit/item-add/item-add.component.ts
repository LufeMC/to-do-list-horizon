import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {

  item:string = "";
  time:string = "";
  link:string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
  	public dialogRefThis: MatDialogRef<ItemAddComponent>)
  {}

  ngOnInit(): void {
  }

  add() {
  	if (this.item !== "") {
  		this.dialogRefThis.close({event:"close", data: [this.item, this.time, this.link]});
  	} else if (this.item[0] === " " || this.item === "") {
  		this.dialogRefThis.close({event:"close", data: ["theuserdidntputanyvalues", ""]});
  	}
  }

  close() {
  	this.dialogRefThis.close({event:"close", data: ["thisscreenwasclosedbytheuser", ""]});
  }

}

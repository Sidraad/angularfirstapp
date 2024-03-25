import { Component,OnInit,Inject } from '@angular/core';
//import {MAT_DIALOG_DATA} from '@angular/material';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { data } from 'jquery';

@Component({
  selector: 'app-matconfirmdialogue',
  templateUrl: './matconfirmdialogue.component.html',
  styleUrls: ['./matconfirmdialogue.component.css']
 // styleUrls: []

})
export class MatconfirmdialogueComponent implements OnInit {
constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef: MatDialogRef<MatconfirmdialogueComponent>)
 {}

ngOnInit(): void {} 
closeDialogue() {
  this.dialogRef.close(false);
}
}

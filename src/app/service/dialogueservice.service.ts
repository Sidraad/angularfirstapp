import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatconfirmdialogueComponent } from '../components/matconfirmdialogue/matconfirmdialogue.component';

@Injectable({
  providedIn: 'root'
})
export class DialogueserviceService {

  constructor(private dialogue : MatDialog) { }

    OpenConfirmDialogue(msg: string)
  {
    return this.dialogue.open(MatconfirmdialogueComponent, {
      width : '390px',
      panelClass : 'confirm-dialogue-container',
      disableClose : false,
      data : {message : msg}
    });
  }
}

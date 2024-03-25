import { Component} from '@angular/core';
//import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {apiresponse} from '../../model/api.response';
import {LoginserviceService} from '../../service/loginservice.service';
import 'datatables.net';
import 'datatables.net-dt';
import { DialogueserviceService } from 'src/app/service/dialogueservice.service';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import * as FileSaver from 'file-saver';
import {loginmodel} from '../../model/login.model';
@Component({
  selector: 'app-applydt',
  templateUrl: './applydt.component.html',
  styleUrls: ['./applydt.component.css']
})
export class ApplydtComponent {
  SearchText = "";
  p: any = 0;
  employee: loginmodel = new loginmodel();
  data: any=  Observable<apiresponse[]>;
 constructor(private LoginserviceService:LoginserviceService, 
  private router:Router, 
  private cdRef: ChangeDetectorRef,
  private dialogueService : DialogueserviceService)
 {}
 
  ngOnInit():void {
   this.fetchdata();
  }
  DelDetail(login_Id:number)
  {
    this.dialogueService.OpenConfirmDialogue('Are you sure to delete the record?')
    .afterClosed().subscribe(res=> {
      if (res==='true'){
           // do confirmation actions
      this.LoginserviceService.deletedetail(login_Id).subscribe(
      data=> {console.log(data);});  
 
  // Redraw the DataTable to reflect the updated data
  //$('#example').DataTable().draw(false);
    this.fetchdata();
    console.log('Dialog result:', res);
 
 // Trigger change detection to update the view
 //this.cdRef.detectChanges();
      }   
    });
  }

  EditDetail(login_Id:number)
  {
   this.router.navigate(['/edit'], { queryParams: { edit: 'true', id: login_Id } });
  }

  GenPDF() {
    this.LoginserviceService.fetchdetailById(402).subscribe(
      (data) => {
        this.employee.login_email = data.login_email;
  
        const doc = new jsPDF();
        const content = `email: ${this.employee.login_email}`;
        doc.text(content, 10, 10);
        const pdf = doc.output('blob');
        FileSaver.saveAs(pdf, 'output.pdf');
      },
      (error) => {
        // Handle errors when fetching data
        console.error('Error fetching data:', error);
      }
    );
  }
  

fetchdata() {
    this.data =this.LoginserviceService.fetchdetail().subscribe((response: any)=>{
    this.data = response;
     // Initialize DataTable on your table element
     //$('#example').DataTable();
   
  ;});
}
}

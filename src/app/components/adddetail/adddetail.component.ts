import { Component, OnInit , NgModule} from '@angular/core';
import {LoginserviceService} from '../../service/loginservice.service';
import {loginmodel} from '../../model/login.model';
//import {FormControl, FormGroup, Validators, FormsModule} from "@angular/forms";
import {Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { data, error, param } from 'jquery';
import {UploadfileserviceService} from '../../service/uploadfileservice.service';
import { DialogueserviceService } from 'src/app/service/dialogueservice.service';
import {apiresponse} from '../../model/api.response';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adddetail',
  templateUrl: './adddetail.component.html',
  styleUrls: ['./adddetail.component.css']
})
export class AdddetailComponent implements OnInit {
 alert =false;
 msgalert: string="";
 showpwd:any;
 Title: string = 'Add Detail';
 addButtonText: string = 'Submit'; 
  employee: loginmodel = new loginmodel();
  submitted = false;
  roledata: any=  Observable<apiresponse[]>;

  constructor(private LoginserviceService: LoginserviceService,
    private router: Router,
    private route: ActivatedRoute,
    private dialogueService : DialogueserviceService,
    private uploadfileService : UploadfileserviceService,
    private loginService:LoginserviceService) { }

  ngOnInit() {
    this.chkurl();
  }
  onSubmit()
  {this.LoginserviceService.createdetail(this.employee).subscribe(
    data=>console.log(data),error=>console.log(error));
    this.employee = new loginmodel();
    this.router.navigate(['']);
}
updatebyid(id:number)
{
  if (!isNaN(id)) {
    this.LoginserviceService.fetchdetailById(id).subscribe(
      data => {
        this.employee.login_email = data.login_email;
      }
    );
    
this.employee.login_Id=id;
    // 'id' is a valid number, use it in the update logic
    this.LoginserviceService.updatedetail(id, this.employee).subscribe(
      data => {
        console.log(data);
      }
    );
    this.msgalert = "success"
    this.showAlertMethod();
  } else {
    console.error('Invalid or missing ID from URL');
  }
}

showAlertMethod() {
  this.alert = true;

  // Use setTimeout to hide the alert after 2 seconds
  setTimeout(() => {
    this.alert = false;
  }, 2000); // 2000 milliseconds (2 seconds)
}



onFileSelect(event: any){
  if(event.target.files.length >0)
  {
    const selectedfile = event.target.files[0];
    if (selectedfile.size < 500000)
    {
      if (selectedfile.type === 'image/jpeg' || selectedfile.type === 'image/jpg')
    {
      
    function generateUniqueFileName(file: File): string {
      const timestamp = new Date().getTime();
      const random = Math.floor(Math.random() * 1000); // You can adjust the range as needed
      const originalFileName = file.name;
      const fileExtension = originalFileName.split('.').pop(); // Get the file extension
      return `${timestamp}_${random}.${fileExtension}`;
    }
     const modifiedFileName = generateUniqueFileName(selectedfile); // Generate a unique file name
      const modifiedFile = new File([selectedfile], modifiedFileName);
      this.uploadfileService.uploadFile(modifiedFile).subscribe(
        (response) => {
          console.log('File uploaded successfully');
          // Send the file path and other details to your backend for database storage.
          const filePathInAssets = 'assets/' + response.filePath;
          console.log('File path in assets folder:', filePathInAssets);
        },
        (error) => {
          console.error('File upload failed');
        }
      );
    }
    else
    {
      console.log(event);
      this.msgalert = "only jpg file is allowed";
      this.showAlertMethod();
    }
    } 
    else 
    {
      this.msgalert = "file size must not exceed 2MB";
      this.showAlertMethod();
    }
    
  }
  else
  {
    this.msgalert = "select any file";
    this.showAlertMethod();
  }
}

passwordToggle()
{this.showpwd = !this.showpwd;}

chkurl(){
  this.binddd();
  this.route.queryParams.subscribe((queryParams) => {
    if (queryParams['edit'] === 'true') {
      this.Title = 'Edit Detail';
      this.addButtonText = 'Update';
      if (!isNaN(queryParams['id'])) {
        this.LoginserviceService.fetchdetailById(queryParams['id']).subscribe(
          data => {
            this.employee.login_email = data.login_email;
            this.employee.login_pwd = data.login_pwd;
            this.employee.role = data.role;
          }
        );
      } else {
        console.error('Invalid or missing ID from URL');
      }
    } else {
      this.Title = 'Add Detail';
     // this.onSubmit();
    }
  });
}

binddd()
{
this.LoginserviceService.fetchroledetail().subscribe((data)=>{
  console.log(data);
  this.roledata = data;
})

}

OnBtnClick()
{
  this.route.queryParams.subscribe((queryParams) => {
    if (queryParams['edit'] === 'true') {
      this.updatebyid(queryParams['id']);
    } else {
      this.onSubmit();
    }
  });
}
}



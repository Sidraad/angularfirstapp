import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplydtComponent } from './components/applydt/applydt.component';
import { AdddetailComponent } from './components/adddetail/adddetail.component';

const routes: Routes = [
  {path: '',component: ApplydtComponent },
  {path: 'add',component: AdddetailComponent },
  //{path: 'edit/:id',component: AdddetailComponent },
  {path: 'edit',component: AdddetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

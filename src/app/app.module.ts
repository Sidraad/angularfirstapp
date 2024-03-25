import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplynavComponent } from './components/applynav/applynav.component';
import { ApplydtComponent } from './components/applydt/applydt.component';
import { AdddetailComponent } from './components/adddetail/adddetail.component';
import { MatconfirmdialogueComponent } from './components/matconfirmdialogue/matconfirmdialogue.component';
import { LoginserviceService } from './service/loginservice.service';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ApplynavComponent,
    ApplydtComponent,
    AdddetailComponent,
    MatconfirmdialogueComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatIconModule,
    NgxPaginationModule
  ],
  providers: [ LoginserviceService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }

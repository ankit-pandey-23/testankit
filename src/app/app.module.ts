import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule,MatInputModule,MatTableModule} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PollsListComponent } from './component/polls-list/polls-list.component';
import { DialogComponent } from './component/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PollsListComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: PollsListComponent },
      { path: 'hits',component: PollsListComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }

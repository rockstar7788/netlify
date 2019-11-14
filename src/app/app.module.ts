import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from "@angular/fire";
import {AngularFireDatabaseModule} from '@angular/fire/database'
import { environment} from "../environments/environment";
import { HeaderComponent } from './header/header.component';
import { CvComponent } from './cv/cv.component';
import { WorksComponent } from './works/works.component'
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http"
import { DatePublishedPipe } from './date-published.pipe';
import { TimeReadPipe } from './time-read.pipe';
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminEditComponent } from './admin-edit/admin-edit.component';



const paths = [
  {path: '', component: CvComponent},
  {path: "works", component: WorksComponent},
  {path: "works/:PostId", component: PostComponent},
  {path: "edit", component: AdminEditComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CvComponent,  
    WorksComponent, DatePublishedPipe, TimeReadPipe, PostComponent, AdminEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(paths),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

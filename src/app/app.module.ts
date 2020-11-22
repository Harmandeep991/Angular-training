import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Routes,RouterModule } from '@angular/router';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatInputModule} from '@angular/material/input';
// import { MatInputModule} from '@angular/material';
// import { MatInputModule, MatCardModule, MatButtonModule, MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {  MatFormFieldModule} from '@angular/material/form-field';
import { from } from 'rxjs';
import { DataPageComponent } from './data-page/data-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'  


const routes: Routes = [
  { path: 'home', component:AppComponent },
  { path: 'signup', component:FormdemoComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'data', component: DataPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormdemoComponent,
    ProfilePageComponent,
    DatepickerComponent,
    DataPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTableModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

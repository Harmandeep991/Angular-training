import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Routes,RouterModule } from '@angular/router';
import { FormdemoComponent } from './formdemo/formdemo.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  {path:"", redirectTo:"/signup", pathMatch:"full"},
  { path: 'signup', component:FormdemoComponent },
  { path: 'profile', component: ProfilePageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FormdemoComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

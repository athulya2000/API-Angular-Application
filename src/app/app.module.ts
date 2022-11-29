import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerDataComponent } from './passenger-data/passenger-data.component';
import { UsPublicdataComponent } from './us-publicdata/us-publicdata.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProductListComponent } from './product-list/product-list.component';

const myRoute:Routes=[
  {
    path:"",
    component:PassengerDataComponent
  },
  {
    path:"us",
    component:UsPublicdataComponent
  },
  {
    path:"user",
    component:UserInfoComponent
  },
  {
    path:"product",
    component:ProductListComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PassengerDataComponent,
    UsPublicdataComponent,
    UserInfoComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

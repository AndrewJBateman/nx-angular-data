import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@nx-angular-data/material';
import { CoreDataModule } from '@nx-angular-data/core-data';
import { CoreStateModule } from '@nx-angular-data/core-state';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { DataListComponent } from './data/data-list/data-list.component';
import { DataDetailsComponent } from './data/data-details/data-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, DataComponent, HomeComponent, DataListComponent, DataDetailsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

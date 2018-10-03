import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatListModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { HeaderComponent } from './main-wrapper/header/header.component';
import { MenuComponent } from './main-wrapper/header/menu/menu.component';
import { NavComponent } from './main-wrapper/nav/nav.component';
import { HomeComponent } from './main-wrapper/home/home.component';
import { MyGridComponent } from './main-wrapper/my-grid/my-grid.component';
import { AppRouting } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MainWrapperComponent,
    HeaderComponent,
    MenuComponent,
    NavComponent,
    HomeComponent,
    MyGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    CommonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    CdkTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

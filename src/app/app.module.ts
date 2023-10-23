import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import { AppComponent } from './app.component';
import HeaderComponent from './components/header/header.component';
import SearchComponent from './components/search/search.component';
import SearchFilterComponent from './components/search-filter/search-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }

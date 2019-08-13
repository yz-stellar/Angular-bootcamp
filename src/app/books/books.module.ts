import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDataService } from './book-data.service';
import {HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [BooksComponent, BookListComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule
  ],
  providers: [BookDataService],
  exports: [BooksComponent, BookListComponent]
})
export class BooksModule { }

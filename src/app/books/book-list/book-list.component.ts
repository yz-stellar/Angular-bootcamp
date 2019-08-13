import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  subscription: Subscription;

  constructor(private bookData: BookDataService) { }

  ngOnInit() {
    this.subscription = this.bookData
    .getBooks()
    .subscribe(observableBooks => {
        this.books = observableBooks;
      })
  }

  ngOnDestry() {
    this.subscription.unsubscribe();
  }



}

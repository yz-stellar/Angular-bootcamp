import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private bookData: BookDataService) { }

  ngOnInit () {
    this.route.params.subscribe(params => {
      this.bookData.getBookByIsbn(params.isbn).subscribe(observableBook => {
        this.book = observableBook;
      })
    })

    // this.route.params
    //  .pipe(
    //    map(params => params.isbn),
    //    flatMap(isbn => this.bookData.getBookByIsbn(isbn))
    //  )
    //  .subscribe(book => {
    //    this.book = book;
    //  });

  }

}

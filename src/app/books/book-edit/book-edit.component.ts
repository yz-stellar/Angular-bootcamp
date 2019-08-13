import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  book: Book;
  
  constructor(private route: ActivatedRoute, private bookData: BookDataService) { }

  ngOnInit () {
    this.route.params.subscribe(params => {
      this.bookData.getBookByIsbn(params.isbn).subscribe(observableBook => {
        this.book = observableBook;
      })
    })
  }
  save(form: NgForm){
      console.log(form);
  }

}

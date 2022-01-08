import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
book: Book;
  constructor(private activatedRouter: ActivatedRoute,
              private bookService: BookService) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(bookId =>{
      const id = Number(bookId.get('id'));
      this.bookService.detailBook(id).subscribe(book=>{
        this.book = book;
      })
    })
  }

}

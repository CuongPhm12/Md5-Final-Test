import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  });

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }
submit(){
    const book = this.bookForm.value;
    this.bookService.saveBook(book).subscribe(()=>{
      this.bookForm.reset();
      alert('Tạo thành công')
    },error => {
      console.log(error);
    });
}
}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
bookForm: FormGroup;
id: number;
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap) =>{
      this.id = Number(paramMap.get('id'));
       this.getBook(this.id);
    });
  }

  ngOnInit(): void {
  }

  private getBook(id: number) {
    return this.bookService.findById(id).subscribe(book =>{
      this.bookForm = new FormGroup({
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description),
      })
    });
  }

  updateBook(id:number){
    const book = this.bookForm.value;
    this.bookService.updateBook(id,book).subscribe(()=>{
      alert('Cập nhật thành công');
    },error => {
      console.log(error);
    });
  }
}

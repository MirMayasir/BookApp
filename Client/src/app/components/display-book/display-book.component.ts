import { Component } from '@angular/core';
import { Book, BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export class DisplayBookComponent {
  books: Book[] = [];
  displayedColumns: string[] = ['title', 'author', 'price'];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => this.books = data);
  }

}

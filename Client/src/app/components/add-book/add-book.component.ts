import { Component } from '@angular/core';
import { Book, BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  book: Book = { title: '', author: '', price: 0 };

  constructor(private bookService: BookService) {}

  onSubmit() {
    this.bookService.addBook(this.book).subscribe(() => {
      alert('Book added successfully!');
      this.book = { title: '', author: '', price: 0 };
    });
  }

}

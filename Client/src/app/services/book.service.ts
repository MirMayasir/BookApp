import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Book {
  id?: number;
  title: string;
  author: string;
  price: number;
} 

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'https://localhost:7004/api/Book/';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book);
  }
}

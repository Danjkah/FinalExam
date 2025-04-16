import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from './book';
import {BookClass} from './book-class';
import {map, Observable} from 'rxjs';

class CatalogJson {
}

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }


  private static catalogUri: string = 'data/Book.json'


  private static json2Book(bookJson: Book): BookClass {
    const book: Book = new BookClass();

    book.bookTitle = bookJson.bookTitle
    book.authorName = bookJson.authorName
    return  book
  }


  public getAllBooks(): Observable<Book[]> {
    return this.http.get<{ myBooks: any }>(BookDataService.catalogUri)
      .pipe(
        map(catalog => catalog.myBooks
          .map((bookJson: any) => BookDataService.json2Book(bookJson)))
      );
  }



  public getBookByTitle(title: string): Observable<Book | undefined> {
    return this.getAllBooks().pipe(
      map(books => books.find(book => book.bookTitle === title))
    );
  }



}

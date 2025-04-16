import {Book} from './book';

export class BookClass {

  authorName: string = "";
  bookTitle: string = "";
}


export interface CatalogJson {
  books: Book[];
}

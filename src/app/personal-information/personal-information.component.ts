import { Component } from '@angular/core';
import {BookClass} from '../book-class';
import {BookDataService} from '../book-data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-personal-information',
  standalone: false,
  templateUrl: './personal-information.component.html',
  styleUrl: './personal-information.component.css'
})
export class PersonalInformationComponent {

  fullName: string = 'Your full name';
  sheridanId: string = 'sheridan Id';
  sheridanLogin: string = 'sheridan login';

  books: Observable<BookClass[]>;



  constructor(flowerDataService: BookDataService) {
    this.books = flowerDataService.getAllBooks();
  }
}

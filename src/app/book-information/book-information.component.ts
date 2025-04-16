import { Component } from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-book-information',
  standalone: false,
  templateUrl: './book-information.component.html',
  styleUrl: './book-information.component.css'
})
export class BookInformationComponent {
  books : Book[] = [];



}

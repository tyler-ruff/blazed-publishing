import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SanityService } from '../sanity-service.service';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface Press {
  title: String,
  publisher: String
}
export interface Author{
  name: String,
  image: SanityImageSource
}
export interface Book{
  _id: String,
  title: String,
  author: Author,
  publisher: String,
  cover: SanityImageSource,
  publishedAt: Date
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$: Observable<Book[]>

  constructor(private sanityService: SanityService) { 
    this.books$ = sanityService.fetch<Book[]>(
      `*[_type == "book"]{
        _id,
        title,
        publishedAt,
        author->,
        publisher,
        cover
      }`
    )
  }

  ngOnInit(): void {
  }

}

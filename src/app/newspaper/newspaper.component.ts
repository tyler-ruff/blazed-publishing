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
export interface Newspaper{
  _id: String,
  title: String,
  author: Author,
  press: Press,
  cover: SanityImageSource,
  publishedAt: Date
}

@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.css']
})
export class NewspaperComponent implements OnInit {

  issues$: Observable<Newspaper[]>

  constructor(private sanityService: SanityService) { 
    this.issues$ = sanityService.fetch<Newspaper[]>(
      `*[_type == "newspaper"]{
        _id,
        title,
        publishedAt,
        author->,
        press->,
        cover
      }`
    )
  }

  ngOnInit(): void {
  }

}

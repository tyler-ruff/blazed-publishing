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
export interface Magazine {
  _id: String,
  title: String,
  publishedAt: Date,
  author: Author,
  press: Press,
  cover: SanityImageSource
}

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {
  issues$: Observable<Magazine[]>

  constructor(private sanityService: SanityService) { 
    this.issues$ = sanityService.fetch<Magazine[]>(
      `*[_type == "magazine"]{
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

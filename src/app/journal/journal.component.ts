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
export interface Journal{
  _id: String,
  title: String,
  author: Author,
  press: Press,
  cover: SanityImageSource,
  publishedAt: Date
}

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  issues$: Observable<Journal[]>

  constructor(private sanityService: SanityService) { 
    this.issues$ = sanityService.fetch<Journal[]>(
      `*[_type == "journal"]{
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

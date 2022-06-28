import { Component, OnInit } from '@angular/core';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { Observable } from 'rxjs';
import { SanityService } from '../sanity-service.service';

export interface Category{
  title: String
};
export interface Author{
  name: String,
  bio: String,
  slug: String,
  image: SanityImageSource
};
export interface Post {
  _id: String,
  title: String,
  slug: String,
  publishedAt: Date,
  summary: String,
  author: Author,
  category: Category
}
export interface Press {
  title: String,
  publisher: String
}
export interface Journal{
  _id: String,
  title: String,
  author: Author,
  press: Press,
  publishedAt: Date
}
export interface Newspaper{
  _id: String,
  title: String,
  author: Author,
  press: Press,
  publishedAt: Date
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  journalIssue$: Observable<Journal[]>
  newspaperIssue$: Observable<Journal[]>
  magazineIssue$: Observable<Journal[]>
  posts$: Observable<Post[]>

  constructor(private sanityService: SanityService) { 
    this.journalIssue$ = sanityService.fetch<Journal[]>(
      `*[_type == "journal"]{
        _id,
        title,
        publishedAt,
        author->,
        press->
      }[0..1] | order(publishedAt desc)`
    )
    this.newspaperIssue$ = sanityService.fetch<Newspaper[]>(
      `*[_type == "newspaper"]{
        _id,
        title,
        publishedAt,
        author->,
        press->
      }[0..1] | order(publishedAt desc)`
    )
    this.magazineIssue$ = sanityService.fetch<Magazine[]>(
      `*[_type == "magazine"]{
        _id,
        title,
        publishedAt,
        author->,
        press->,
        cover
      }`
    )
    this.posts$ = this.sanityService.fetch<Post[]>(
      `*[_type == "post"]{
        _id,
        title,
        slug,
        publishedAt,
        summary,
        author->,
        category->
      }[0..3] | order(publishedAt desc)`
    );
  }

  ngOnInit(): void {
  }

}

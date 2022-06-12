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

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  posts$: Observable<Post[]>

  constructor(private sanityService: SanityService) { 
    this.posts$ = this.sanityService.fetch<Post[]>(
      `*[_type == "post"]{
        _id,
        title,
        slug,
        publishedAt,
        summary,
        author->,
        category->
      }`
    );
  }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
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
export interface Post{
  _id: String,
  title: String,
  publishedAt: Date,
  body: String,
  author: Author
};

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postId = '0';
  posts$: any;
  authors$: any;
  private sanityService: SanityService;
  constructor(private ss: SanityService) {
    this.sanityService = ss;
  }

  ngOnInit(): void {
   this.posts$ = this.sanityService.fetch<Post[]>(
     `*[_type == "post" && _id == "${this.postId}"]{
       _id,
       title,
       publishedAt,
       body,
       author->,
       category->
     }`
   );
  }

}

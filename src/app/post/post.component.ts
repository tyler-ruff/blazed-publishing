import { Component, Input, OnInit } from '@angular/core';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { Observable } from 'rxjs';
import { SanityService } from '../sanity-service.service';

export interface Press {
  title: String,
  publisher: String
}
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
export interface Magazine{
  _id: String,
  title: String,
  publishedAt: Date,
  body: String,
  author: Author,
  press: Press
};
export interface Newspaper{
  _id: String,
  title: String,
  publishedAt: Date,
  body: String,
  author: Author,
  press: Press
};
export interface Journal{
  _id: String,
  title: String,
  publishedAt: Date,
  body: String,
  author: Author,
  press: Press
};

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postId = '0';
  @Input() type = 'blog';
  posts$: any;
  private sanityService: SanityService;
  constructor(private ss: SanityService) {
    this.sanityService = ss;
  }

  ngOnInit(): void {
   switch(this.type){
     case "magazine":
      this.posts$ = this.sanityService.fetch<Post[]>(
        `*[_type == "magazine" && _id == "${this.postId}"]{
          _id,
          title,
          publishedAt,
          body,
          author->,
          press->
        }`
      );
      break;
     case "newspaper":
      this.posts$ = this.sanityService.fetch<Post[]>(
        `*[_type == "newspaper" && _id == "${this.postId}"]{
          _id,
          title,
          publishedAt,
          body,
          author->,
          press->,
          cover
        }`
      );
      break;
     case "journal":
      this.posts$ = this.sanityService.fetch<Post[]>(
        `*[_type == "journal" && _id == "${this.postId}"]{
          _id,
          title,
          publishedAt,
          body,
          index,
          author->,
          press->,
          cover
        }`
      );
      break;
     case "blog":
     default:
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
      break;
    }
  }

}

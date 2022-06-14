import { Component, Input, OnInit } from '@angular/core';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SanityService } from '../sanity-service.service';

export interface Author{
  name: String,
  bio: String,
  slug: String,
  image: SanityImageSource
};
export interface Book{
  _id: String,
  title: String,
  publishedAt: Date,
  author: Author,
  publisher: String,
  cover: SanityImageSource,
  contents: String[],
  body: String,
  index: String
};
@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css']
})
export class VolumeComponent implements OnInit {
  @Input() bookId = '0';
  posts$: any;
  private sanityService: SanityService;
  constructor(private ss: SanityService) {
    this.sanityService = ss;
  }

  ngOnInit(): void {
      this.posts$ = this.sanityService.fetch<Book[]>(
        `*[_type == "book" && _id == "${this.bookId}"]{
          _id,
          title,
          publishedAt,
          author->,
          publisher,
          cover,
          contents,
          body,
          index
        }`
      );
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, UrlSegment } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LazyLoadDirective } from './lazyload.directive';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { SingleComponent } from './single/single.component';
import { AuthorsComponent } from './authors/authors.component';
import { UnknownComponent } from './unknown/unknown.component';
import { SearchComponent } from './search/search.component';
import { NavComponent } from './nav/nav.component';
import { DisqusModule } from "ngx-disqus";
import { CommentsComponent } from './comments/comments.component';

import { HttpClientModule } from '@angular/common/http';
import { BlogsComponent } from './blogs/blogs.component';
import { BooksComponent } from './books/books.component';
import { PeriodicalsComponent } from './periodicals/periodicals.component';
import { BookComponent } from './book/book.component';
import { MagazineComponent } from './magazine/magazine.component';
import { NewspaperComponent } from './newspaper/newspaper.component';
import { JournalComponent } from './journal/journal.component';
import { PostComponent } from './post/post.component';
import { ToHTMLPipe } from './to-html.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { SanityImagePipe } from './sanity-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LazyLoadDirective,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    SingleComponent,
    AuthorsComponent,
    UnknownComponent,
    SearchComponent,
    NavComponent,
    CommentsComponent,
    BlogsComponent,
    BooksComponent,
    PeriodicalsComponent,
    BookComponent,
    MagazineComponent,
    NewspaperComponent,
    JournalComponent,
    PostComponent,
    ToHTMLPipe,
    FormatDatePipe,
    SanityImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DisqusModule.forRoot('blazed-publishing'),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

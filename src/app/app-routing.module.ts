import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { JournalComponent } from './journal/journal.component';
import { MagazineComponent } from './magazine/magazine.component';
import { NewspaperComponent } from './newspaper/newspaper.component';
import { PeriodicalsComponent } from './periodicals/periodicals.component';
import { SingleComponent } from './single/single.component';
import { UnknownComponent } from './unknown/unknown.component';

const routes: Routes = [
  { path: 'view', component: SingleComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'book', component: BookComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'periodicals', component: PeriodicalsComponent,
    children: [
      { path: 'magazines', component: MagazineComponent },
      { path: 'newspapers', component: NewspaperComponent },
      { path: 'journals', component: JournalComponent },
      { path: '**',   redirectTo: '/periodicals/magazines', pathMatch: 'full' }
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: UnknownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

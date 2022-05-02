import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { SingleComponent } from './single/single.component';
import { UnknownComponent } from './unknown/unknown.component';

const routes: Routes = [
  { path: 'view', component: SingleComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: UnknownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

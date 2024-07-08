import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { PhotosComponent } from './photos/photos.component';
import { JournalComponent } from './journal/journal.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { IndividualBookComponent } from './books/individual-book/individual-book.component';
import { BlogComponent } from './journal/blog/blog.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'books', component: BooksComponent},
  {path: 'books/:name', component:IndividualBookComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'blog', component: JournalComponent},
  {path: 'blog/:article', component: BlogComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', pathMatch:'full', redirectTo: 'home'},
  {path: '', pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './app/journal/blog/blog.component';
import { JournalComponent } from './app/journal/journal.component';
import { BooksComponent } from './app/books/books.component';
import { AdminComponent } from './app/admin/admin.component';
import { IndividualBookComponent } from './app/books/individual-book/individual-book.component';
import { HomeComponent } from './app/home/home.component';
import { PhotosComponent } from './app/photos/photos.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(MarkdownModule.forRoot()),
    importProvidersFrom(RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'books', component: BooksComponent},
      {path: 'books/:name', component:IndividualBookComponent},
      {path: 'photos', component: PhotosComponent},
      {path: 'blog', component: JournalComponent},
      {path: 'blog/:article', component: BlogComponent},
      {path: 'admin', component: AdminComponent},
      {path: '**', pathMatch:'full', redirectTo: 'home'},
      {path: '', pathMatch:'full', redirectTo: 'home'}
    ]))
  ]
}).catch(err => console.error(err));

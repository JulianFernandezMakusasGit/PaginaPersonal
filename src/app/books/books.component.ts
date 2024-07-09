import { Component } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [TopbarComponent, MatCardModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  constructor(private router: Router) {}

  books = [
    { 
      name: "Leave", 
      synopsis: "After ", 
      srcEpub: "../../assets/Epubs/Leave.epub", 
      srcImg:"../../assets/Portadas/Epub/Leave.jpg"
    },
    { 
      name: "Nombre de prueba",
      synopsis: "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum ", 
      srcEpub: "a description",
      srcImg:"../../assets/Chibi.png"
    },
    {
      name: "Nombre de prueba",
      synopsis: "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum ", 
      srcEpub: "a description", 
      srcImg:"../../assets/Chibi.png"
    },
    {
      name: "Nombre de prueba", 
      synopsis: "Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum Loren ipsum ", 
      srcEpub: "a description", 
      srcImg:"../../assets/Chibi.png"
    }
  ]

  redirectTo(name:String) {
    var route = "books/" + name;
    console.log(route);
    this.router.navigate([route]);
  }
}

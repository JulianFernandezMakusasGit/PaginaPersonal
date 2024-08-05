import { Component } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [TopbarComponent, MatCardModule, MatChipsModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  constructor(private router: Router) {}

  books = [
    { 
      name: "Teach me to love again", 
      synopsis: "Ghost begins to realize that he is developing feelings for his younger sergeant.", 
      srcEpub: "TeachMeToLoveAgain", 
      srcImg:"../../assets/Portadas/Epub/Book.png",
      tags: ["SoapGhost"]
    },
    { 
      name: "Leave", 
      synopsis: "After bad experiences with love in the past, Soap decides to trust in love again, after crossing paths with Ghost. But an old grief and a night of alcohol are going to put an end to the happiness in his life. Will Soap forgive Ghost? Read and find out. Inspired by @IsaAfterDark.", 
      srcEpub: "Leave", 
      srcImg:"../../assets/Portadas/Epub/Book.png",
      tags: ["SoapGhost", "Angst", "Cheating", "Confort"]
    },
    { 
      name: "Threadfics",
      synopsis: "Some short fics that I wrote on Twitter", 
      srcEpub: "Threadfics",
      srcImg:"../../assets/Portadas/Epub/Book.png",
      tags: ["SoapGhost", "Angst", "MCD","Confort"]
    }
  ]

  redirectTo(srcEpub:String) {
    var route = "books/" + srcEpub;
    console.log(route);
    this.router.navigate([route]);
  }
}

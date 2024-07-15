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
      name: "I'll be there for you",
      synopsis: "Memories of the past torment Ghost, remembering the moments he had with Soap before he was killed by Makarov.", 
      srcEpub: "IllBeThereForYou",
      srcImg:"../../assets/Portadas/Epub/Book.png",
      tags: ["SoapGhost", "Angst", "MCD"]
    },
    {
      name: "A kitten for the 141",
      synopsis: "Soap and Ghost bring a kitten they found on the training grounds and Price finds out. Inspired by @sofkefox art.", 
      srcEpub: "AKittenForThe141", 
      srcImg:"../../assets/Portadas/Epub/Book.png",
      tags: ["SoapGhost", "Confort"]
    },
    {
      name: "Promise to mama Mactavish", 
      synopsis: "Soap calls Mama Mactavish for her birthday and his mother asks for a very specific gift. Inspired by @IsaAfterDark.", 
      srcEpub: "PromiseToMamaMactavish", 
      srcImg:"../../assets/Portadas/Epub/Book.png",
      tags: ["SoapGhost", "Confort"]
    }
  ]

  redirectTo(srcEpub:String) {
    var route = "books/" + srcEpub;
    console.log(route);
    this.router.navigate([route]);
  }
}

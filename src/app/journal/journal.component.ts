import { Component, OnInit } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [TopbarComponent, MatCardModule, CommonModule],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.css'
})
export class JournalComponent implements OnInit {
    constructor(private router: Router) {}
    blogs = [
      { 
        name: "Why my own page?", 
        subtitle: "Hey there, a little explanation on why I created this web page.", 
        mdFile: "WhyMyOwnPage", 
        srcImg:"../../assets/Portadas/Blog/Why my own page.jpg"
      }
    ]

  ngOnInit(): void {
  }

  redirectTo(name:String) {
    var route = "blog/" + name + ".md";
    console.log(route);
    this.router.navigate([route]);
  }
}

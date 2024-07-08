import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TopbarComponent } from '../../topbar/topbar.component';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [TopbarComponent, MarkdownModule, HttpClientModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  post!: string; 
  href!: string; 
  constructor(private route: ActivatedRoute) { } 
  ngOnInit(): void {
      let articleName = this.route.snapshot.paramMap.get('article'); 
      this.href = window.location.href; 
      this.post = '../../assets/Blogs/' +  articleName; 
      console.log(this.post);
  }
}

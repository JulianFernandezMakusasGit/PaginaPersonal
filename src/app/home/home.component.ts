import { Component } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopbarComponent, AboutMeComponent, MatCardModule, MatProgressBarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  projects = [
    {name: "Project 1: aaaaaaaaaaaaaaaaaaaaa", description: "Small description", progress: 20, srcImg: "../../assets/Chibi.png"},
    {name: "Project 2:", description: "Small description", progress: 1, srcImg: "../../assets/Chibi.png"},
    {name: "Project 3:", description: "Small description", progress: 1, srcImg: "../../assets/Chibi.png"},
    {name: "Project 4:", description: "Small description", progress: 3, srcImg: "../../assets/Chibi.png"},
  ]
}

import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [MatCardModule, MatGridListModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  images = [
    { src: '../../assets/Screenshot.png', cols: 1, rows: 1 },
    { src: '../../assets/Screenshot.png', cols: 1, rows: 1 },
    { src: '../../assets/Screenshot.png', cols: 1, rows: 1 },
    { src: '../../assets/Screenshot.png', cols: 1, rows: 1 },
    { src: '../../assets/Screenshot.png', cols: 1, rows: 1 },
    { src: '../../assets/Screenshot.png', cols: 1, rows: 1 }
  ];
}

import { Component } from '@angular/core';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [TopbarComponent],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {

}

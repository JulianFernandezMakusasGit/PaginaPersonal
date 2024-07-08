import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'; 


@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  constructor(private router: Router) {}
  
  redirectTo(url: string) {
    this.router.navigate([url]);
  }
}

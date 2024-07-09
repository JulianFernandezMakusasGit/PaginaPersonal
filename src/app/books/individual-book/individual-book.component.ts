import { Component, HostListener, OnInit, Inject, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import ePub, { Book } from 'epubjs';
import { TopbarComponent } from '../../topbar/topbar.component';
import { ActivatedRoute } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-individual-book',
  standalone: true,
  imports: [TopbarComponent, MatToolbar, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './individual-book.component.html',
  styleUrl: './individual-book.component.css'
})
export class IndividualBookComponent implements OnInit {
  private book: Book | undefined;
  private rendition: any;
  private startX: number = 0;
  private endX: number = 0;
  private isBrowser!: boolean;
  private hideButtonsTimeout: any;

  constructor(private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.initializeBook();
    }
  }

  initializeBook(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      const path = `../../assets/Epubs/${name}.epub`;
      this.book = ePub(path);

      this.rendition = this.book.renderTo('viewer', {
        width: '100vw',
        height: '80vh'
      });

      this.rendition.display().then(() => {
        console.log('Rendition initialized');
      }).catch((error: any) => {
        console.error('Error initializing rendition:', error);
      });
    } else {
      console.error('No book name provided in route');
    }
  }

  prevPage(): void {
    if (this.rendition) {
      this.rendition.prev().then(() => {}).catch((error: any) => {console.error('Error going to previous page:', error);});
    } else {
      console.error('Rendition is not initialized');
    }
  }

  nextPage(): void {
    if (this.rendition) {this.rendition.next().then(() => {}).catch((error: any) => {console.error('Error going to next page:', error);
      });
    } else {
      console.error('Rendition is not initialized');
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    this.endX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  handleSwipe(): void {
    if (this.endX < this.startX) {
      this.nextPage();
    } else if (this.endX > this.startX) {
      this.prevPage();
    }
  }

}

import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.css']
})
export class ProjectCardsComponent {
  @ViewChild('marquee', { static: true }) marquee!: ElementRef;

  cards = [1, 2, 3, 4, 5];

  stopMarquee() {
    if (this.marquee) {
      this.marquee.nativeElement.stop();
    }
  }

  startMarquee() {
    if (this.marquee) {
      this.marquee.nativeElement.start();
    }
  }
}
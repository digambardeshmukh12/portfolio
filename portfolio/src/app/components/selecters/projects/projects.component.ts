// projects.component.ts

import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  
})
export class ProjectsComponent implements OnInit {
 
  ngOnInit(): void {}
   imageLoaded = false;

  onImageLoad() {
    this.imageLoaded = true;
  }

  @ViewChild('image', { static: false }) imageElement: ElementRef | undefined;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (this.imageElement) {
      this.startSlowLoad();
      this.addHoverEffect();
    }
  }

  startSlowLoad() {
    const image = this.imageElement!.nativeElement; // Use definite assertion

    let opacity = 0;
    const interval = setInterval(() => {
      opacity += 0.2;
      this.renderer.setStyle(image, 'opacity', opacity);

      if (opacity >= 1) {
        clearInterval(interval);
      }
    }, 300);
  }


  addHoverEffect() {
    const image = this.imageElement!.nativeElement;

    this.renderer.listen(image, 'mouseover', () => {
      this.renderer.addClass(image, 'hover-effect');
    });

    this.renderer.listen(image, 'mouseout', () => {
      this.renderer.removeClass(image, 'hover-effect');
    });
  }
}

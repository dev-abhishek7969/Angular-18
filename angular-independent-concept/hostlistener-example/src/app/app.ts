import { Component, ElementRef, HostBinding, HostListener, Renderer2, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hostlistener-example');

  @ViewChild('hoverBox') hoverBox!: ElementRef;


  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Set initial style using Renderer2
    this.renderer.setStyle(this.hoverBox.nativeElement, 'background', 'lightblue');
  }

  // 👉 HostListener for mouseenter
  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(this.hoverBox.nativeElement, 'background', 'lightgreen');
    this.renderer.setStyle(this.hoverBox.nativeElement, 'transform', 'scale(2.05)');
  }

  // 👉 HostListener for mouseleave
  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.hoverBox.nativeElement, 'background', 'lightblue');
    this.renderer.removeStyle(this.hoverBox.nativeElement, 'transform');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    alert(`Window resized: ${window.innerWidth} x ${window.innerHeight}`);
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    alert(`Key pressed: ${event.key}`);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    alert(window.scrollY);
  }
}

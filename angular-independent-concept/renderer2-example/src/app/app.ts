import { AfterViewInit, Component, ElementRef, Renderer2, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {

  @ViewChild('titleEl') titleEl!: ElementRef;
  @ViewChild('container') container!: ElementRef;

  constructor(private renderer: Renderer2) { }

  protected readonly title = signal('renderer2-example');

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.titleEl.nativeElement, 'color', 'blue');

  }

  changeStyle() {
    this.renderer.setStyle(this.titleEl.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.titleEl.nativeElement, 'font-size', '30px');

  }

  addNewElement() {
    const p = this.renderer.createElement('p');
    const text = this.renderer.createText('This paragraph was added with Render2');

    this.renderer.appendChild(p, text);
    this.renderer.appendChild(this.container.nativeElement, p);
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from "./components/data-bindings/data-binding.component";
import { StructuralDirComponent } from "./components/directive/structural-dir/structural-dir/structural-dir.component";

@Component({
  selector: 'app-root',
  imports: [DataBindingComponent, StructuralDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-concepts';
}

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DataBindingComponent } from "./components/data-bindings/data-binding.component";
import { StructuralDirComponent } from "./components/directive/structural-dir/structural-dir/structural-dir.component";
import { AttributeDirComponent } from './components/directive/attribute-dir/attribute-dir.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-concepts';
}

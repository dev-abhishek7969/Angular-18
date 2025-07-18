import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RolesComponent } from './components/dataBindingConcept/roles.component';
import { MasterComponent } from './components/master/master.component';
import { DesignationComponent } from './components/designation/designation.component';
import { RoleComponent } from './components/role/role.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_18_tutorial';
}

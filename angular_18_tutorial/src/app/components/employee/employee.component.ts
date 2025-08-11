import { Component } from '@angular/core';
import { RoleComponent } from "../role/role.component";
import { RolesComponent } from '../dataBindingConcept/roles.component';

@Component({
  selector: 'app-employee',
  imports: [RoleComponent,RolesComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

}

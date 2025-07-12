import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

  firstname: string = "Angular Tutorial";
  angularVersion = "Version 18";
  version: number = 18;
  isActive:boolean = true;
  currentDate:Date = new Date();

  inputType: string = "checkbox"

  slectedState: string = '';

  showWelcomeAlert(){
    alert("Welcome Angular 18 Tutorials");
  }

  showMessage(msg: string){
    alert(msg);
  }

}

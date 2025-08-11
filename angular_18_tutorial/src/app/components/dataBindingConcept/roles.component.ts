import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
  ngOnInit(): void {
  }

  firstname: string = "Angular Tutorial";
  angularVersion = "Version 18";
  version: number = 18;
  isActive:boolean = true;
  currentDate:Date = new Date();
  tempc : number = 0;
  tempf : string = '';

  inputType: string = "checkbox"

  slectedState: string = '';

  showWelcomeAlert(){
    alert("Welcome Angular 18 Tutorials");
  }

  showMessage(msg: string){
    alert(msg);
  }

  updateValue(v: string){
    let temp = Number(v) * 1.8 + 32;
    this.tempf = temp.toFixed(1);
  }

}

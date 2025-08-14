import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-dir',
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './attribute-dir.component.html',
  styleUrl: './attribute-dir.component.css'
})
export class AttributeDirComponent {
  
  div1Bgcolor:string ='bg-primary';
  div2Bgcolor:string = 'bg-danger'
  isDiv2Active:boolean = false;
  num1:string='';
  num2:string='';
  isActive:boolean = false;

  addRedClass(){
    this.div1Bgcolor = 'bg-danger';
  }

  addBlueClass(){
    this.div1Bgcolor = 'bg-primary';
  }

  toggleColor(){
    this.isDiv2Active = !this.isDiv2Active;
  }


 studentList: any[] = [
    {studId:12, totalMarks:23, gender:'male', name:'AAA', city: 'Pune',   isActive:  false},
    {studId:22, totalMarks:33, gender:'female', name:'BBB', city: 'Mumbai', isActive:  false},
    {studId:32, totalMarks:67, gender:'male', name:'CC', city: 'Jalgao', isActive:  true},
    {studId:56, totalMarks:98, gender:'female', name:'DD', city: 'Mumbai', isActive:  false},
    {studId:34, totalMarks:20, gender:'male', name:'EE', city: 'Nagpur', isActive:  false},
    {studId:76, totalMarks:50, gender:'male', name:'FFF', city: 'Thane', isActive:  true},
  ]

  
  customerStyle: any = {
    'color':'white',
    'background-color': 'red',
    'width': '200px',
    'height': '200px',
    'border-radius': '50%'
  };
}
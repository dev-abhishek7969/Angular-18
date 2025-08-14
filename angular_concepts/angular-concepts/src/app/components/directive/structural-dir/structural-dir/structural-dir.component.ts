import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-structural-dir',
  imports: [FormsModule,CommonModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

  div1Visible : boolean = true;
  div2Visible : boolean = true;
  num1: string = '';
  num2 : string = '';
  selectedState: string = 'USA';

  constructor(private router:Router){}

  showDiv1(){
    this.div1Visible = true;
  }

  hideDiv1(){
    this.div1Visible = false;
  }

  toggleDiv2(){
    this.div2Visible = ! this.div2Visible;
  }


  cityList :string[] = ['patna','pune','panji','punjab']

  studenList: any[] = [
    {studId:12, name:'AAA', city: 'Pune',   isActive:  false},
    {studId:22, name:'BBB', city: 'Mumbai', isActive:  false},
    {studId:32, name:'CC', city: 'Jalgao', isActive:  true},
    {studId:56, name:'DD', city: 'Mumbai', isActive:  false},
    {studId:34, name:'EE', city: 'Nagpur', isActive:  false},
    {studId:76, name:'FFF', city: 'Thane', isActive:  true}
  ]


  gotoAttributeDir(){
    this.router.navigateByUrl("attribute-dir");
  }
}

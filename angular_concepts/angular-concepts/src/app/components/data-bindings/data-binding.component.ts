import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName = "Abhishek"
  courseName = "Angular 18";
  intputType = "radio";
  rollNumber: number = 123;
  isIndian : boolean = false;

  currentDate : Date = new Date();

  inputType : string = "checkbox"

  myClassName: string = "bg-primary"

  selectState :string = "BR";

  signalName = signal("Hello world");

  constructor(){

  }

  onClick(){
    alert("Button clicked.");
    this.signalName.set("signal value changed.");
  }

  onClickBy(msg:string){
    alert(msg);
  }

}

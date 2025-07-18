import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponse, IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{

  designationList: IDesignation[] = [];
  ngOnInit(): void {
    this.masterService.getDesignation().subscribe((result: APIResponse) =>{
      this.designationList = result.data;
    },error=>{
      alert("API error")
    })
  }

  masterService = inject(MasterService);
}

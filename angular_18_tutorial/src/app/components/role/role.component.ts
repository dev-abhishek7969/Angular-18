import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-role',
  imports: [CommonModule],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent implements OnInit{

  http = inject(HttpClient);

  roleList: IRole [] = [];
  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles(){
    this.http.get("https://freeapi.miniprojectideas.com/api/EmployeeApp/GetAllRoles").subscribe((resp:any) =>{
      this.roleList = resp.data
    })
  }

}
 
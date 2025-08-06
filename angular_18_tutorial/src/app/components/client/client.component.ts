import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponse } from '../../model/interface/role';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{

  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadCleintData();
  }

  clientObj: Client = new Client();
  clientList: Client[] = [];

  loadCleintData(){
    this.clientService.getAllClient().subscribe((res:APIResponse) => {
      this.clientList = res.data;
    })
  }

  onSaveClient(){
    debugger;
    this.clientService.addUpdate(this.clientObj).subscribe(( res : APIResponse) => {
      if(res.result){
        this.loadCleintData();
        alert("Client created success");
      }
      else{
        alert(res.message)
      }
    })
  }

}

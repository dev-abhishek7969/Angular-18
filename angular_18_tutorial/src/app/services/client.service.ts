import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { environment } from '../../environments/environment.development';
import { APIResponse } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClient ():Observable<APIResponse>{
    return this.http.get<APIResponse>('https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCustomers')
  }

  addUpdate (obj:Client):Observable<APIResponse>{
    return  this.http.post<APIResponse>(environment.API_URL+"AddUpdateClient",obj)
  }  

  deleteClientById(id:number):Observable<APIResponse>{
    return this.http.get<APIResponse>(environment.API_URL+"DeleteClientByClientId?clientId="+id)
  }

}

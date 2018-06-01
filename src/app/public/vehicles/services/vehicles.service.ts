import { Vehicle } from './../models/vehicle.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../../../config/api';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  vehicles: Array<Vehicle> = [];

  constructor(
    public http: HttpClient,
    public sessionService: SessionStorageService
  ) { }

  getVehicles(): Observable<Array<Vehicle>> {
    const apiVehiclesURL = `${API.DATA_SERVICES_BASE_URL}/vehicles`;
    return this.http.get<Array<Vehicle>>(apiVehiclesURL);
  }

  getToken(): boolean {
    const user = this.sessionService.retrieve('user');

    if (!!user && !! user.token) {
      return user.token;
    }

    return false;
  }

  createHeadersObject(token) {
    return new HttpHeaders({
      'Content-type': 'application/json; charset=utf-8',
      'Authorization': `Bearer ${token}`
    });
  }

  getVehiclesUsingToken(): Observable<Array<Vehicle>> {
    const apiVehicleUrl = `${API.DATA_SERVICES_BASE_URL}/rentals/user`;
    const token = this.getToken();

    if (token) {
      const headers = this.createHeadersObject(token);
      return this.http.get<Array<Vehicle>>(apiVehicleUrl, {headers: headers});
    }
  }

  getVehicleById(id: number): Vehicle {
    return this.vehicles.find(vehicle => vehicle.id === id);
  }
}

import { Vehicle } from './../models/vehicle.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  vehicles: Array<Vehicle> = [];

  constructor(
    public http: HttpClient
  ) { }

  getVehicles(): Observable<Array<Vehicle>> {
    const apiVehiclesURL = `http://rentals-api.webtraining.fun/api/vehicles`;
    return this.http.get<Array<Vehicle>>(apiVehiclesURL);
  }

  getVehicleById(id: number): Vehicle {
    return this.vehicles.find(vehicle => vehicle.id === id);
  }
}

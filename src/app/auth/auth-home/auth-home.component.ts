import { Component, OnInit } from '@angular/core';
import { Vehicle } from './../../public/vehicles/models/vehicle.model';
import { VehiclesService } from '../../public/vehicles/services/vehicles.service';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.scss']
})
export class AuthHomeComponent implements OnInit {

  myVehicles: Array<Vehicle> = [];

  constructor(
    public vehiclesService: VehiclesService
  ) { }

  ngOnInit() {
    this.vehiclesService.getVehiclesUsingToken().subscribe(
      vehicles => this.myVehicles = vehicles,
      error => console.log(error)
    );
  }

}

import { VehiclesService } from './services/vehicles.service';
import { Vehicle } from './models/vehicle.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  vehicles: Array<Vehicle>;

  constructor(
    public vehicleService: VehiclesService
  ) { }

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe(
      response => this.vehicles =  response,
      error => console.log(error)
    );
  }

}

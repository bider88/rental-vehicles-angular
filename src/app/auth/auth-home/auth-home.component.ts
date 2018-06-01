import { Component, OnInit } from '@angular/core';
import { Vehicle } from './../../public/vehicles/models/vehicle.model';
import { VehiclesService } from '../../public/vehicles/services/vehicles.service';
import { AuthenticationService } from '../../common/services/authentication.service';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.scss']
})
export class AuthHomeComponent implements OnInit {

  myVehicles: Array<Vehicle> = [];

  constructor(
    public vehiclesService: VehiclesService,
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.vehiclesService.getVehiclesUsingToken().subscribe(
      vehicles => this.myVehicles = vehicles,
      error => {
        console.log(error);
        if (error.status === 401) {
          this.authService.logout();
        }
      }
    );
  }

  handleRentedVehicle(event) {
    const vehicle: Vehicle = event;
    this.myVehicles.push(vehicle);
  }

}

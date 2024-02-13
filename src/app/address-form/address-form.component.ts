import { Component } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {

  constructor(private backendService: BackendService) { }
  address: string;
  email: string;
  geolocationData: any[];
  loading: boolean = false;
  errorMessage: string;

  onSubmit(): void {
    this.backendService.sendAddressData(this.address, this.email).subscribe(
      (data: any[]) => {
        this.geolocationData = data;
      },
      (error) => {
        console.error('Error fetching geolocation data:', error);
        this.errorMessage = 'An error occurred while fetching data. Please try again.';
      }
    );
  }
}


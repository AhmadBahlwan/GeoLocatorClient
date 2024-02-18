import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  backendUrl='http://localhost:8080/geolocation/api/v1/submit-address';

  constructor(private http: HttpClient) { }

  sendAddressData(address: string, email: string) {
    const data = { address: address, email: email };
    return this.http.post<any>(this.backendUrl, data)
      .pipe(
        catchError(error => {
          console.error('Error:', error);
          return throwError(error);
        })
      );
  }
}


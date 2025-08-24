import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../env/environment';
import { Observable } from 'rxjs';

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error: string;
  errors: string[];
}

@Injectable({
  providedIn: 'root'
})
export class TheaterService {
  private apiUrl = `${environment.apiUrl}/theaters`;

  constructor(private http: HttpClient) {}

  getTheaters<T>(): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(this.apiUrl);
  }
}

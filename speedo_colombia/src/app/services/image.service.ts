import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'http://127.0.0.1:3000/users/seeBanner';

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get(this.apiUrl);
  }
}
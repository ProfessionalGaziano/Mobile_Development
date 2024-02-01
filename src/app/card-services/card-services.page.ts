import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MagicService {
  private apiUrl = 'https://api.magicthegathering.io/v1/cards';

  constructor(private http: HttpClient) {}

  getMagicCards(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

@Component({
  selector: 'app-card-services',
  templateUrl: './card-services.page.html',
  styleUrls: ['./card-services.page.scss'],
})
export class CardServicesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

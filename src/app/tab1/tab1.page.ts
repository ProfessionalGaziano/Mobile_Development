import { Component, OnInit } from '@angular/core';
import { MagicService } from '../card-services/card-services.page'; 

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  magicCards: any[] = [];

  constructor(private magicService: MagicService) {}

  ngOnInit() {
    this.getMagicCards();
  }

  getMagicCards() {
    this.magicService.getMagicCards().subscribe(
      (data: any) => {
        // Assuming the API response has a 'cards' property
        this.magicCards = data.cards.slice(0, 10); // Prendi solo le prime 10 carte
      },
      (error) => {
        console.error('Error fetching magic cards:', error);
      }
    );
  }
}
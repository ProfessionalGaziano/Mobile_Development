import { Component, OnInit } from '@angular/core';
import { MagicService } from '../card-services/card-services.page';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.page.html',
  styleUrls: ['./card-list.page.scss'],
})
export class CardListPage implements OnInit {
  cards: any[] = []; 

  constructor(private MagicService: MagicService) {}

  ngOnInit() {
    this.MagicService.getMagicCards().subscribe((data: any) => {
      this.cards = data.cards.slice(0, 10); // Prendi solo le prime 10 carte
    });
  }
}
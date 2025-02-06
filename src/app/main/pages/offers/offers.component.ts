import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardListComponent} from '../../../shared/components/card-list/card-list.component';
import {ApiService} from '../../../core/api.service';

interface OfferItem {
  imageUrl: string;
  title: string;
  description: string;
  link?: string;
  isPromotion?: boolean;
}

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule, CardListComponent],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent implements OnInit {
  AllOffers: OfferItem[] = [];

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    try {
      const offers = await this.apiService.getOffers();
      this.AllOffers = offers.map((offers: any) => ({
        imageUrl: offers.image || 'default.jpg',
        title: offers.title,
        description: offers.description,
        link: `/offers/${offers.slug}`,
        isPromotion: false
      }));
    } catch (error) {
      console.error('Ошибка загрузки акций:', error);
    }
  }

}

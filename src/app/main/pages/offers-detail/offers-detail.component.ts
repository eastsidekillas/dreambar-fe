import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../core/api.service';
import {CommonModule} from '@angular/common';
import {ReservComponent} from '../../../shared/components/reserv/reserv.component';
import {ShareButton} from 'ngx-sharebuttons/button';

@Component({
  selector: 'app-offers-detail',
  standalone: true,
  imports: [CommonModule, ReservComponent],
  templateUrl: './offers-detail.component.html',
  styleUrl: './offers-detail.component.css'
})
export class OffersDetailComponent implements OnInit{
  offer: any

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
  }

  async ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.offer = await this.apiService.getOfferBySlug(slug);
    }
  }
}

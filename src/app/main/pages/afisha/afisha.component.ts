import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from '../../../shared/components/card-list/card-list.component';
import { ApiService } from '../../../core/api.service';

interface EventItem {
  imageUrl: string;
  title: string;
  description: string;
  link?: string;
  isPromotion?: boolean;
}

@Component({
  selector: 'app-afisha',
  standalone: true,
  imports: [CommonModule, CardListComponent],
  templateUrl: './afisha.component.html',
  styleUrl: './afisha.component.css'
})
export class AfishaComponent implements OnInit {
  AllEvents: EventItem[] = [];

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    try {
      const events = await this.apiService.getEvents();
      this.AllEvents = events.map((event: any) => ({
        imageUrl: event.image || 'default.jpg',
        title: event.title,
        description: event.description,
        link: `/afisha/${event.slug}`,
        isPromotion: false
      }));
    } catch (error) {
      console.error('Ошибка загрузки мероприятий:', error);
    }
  }
}

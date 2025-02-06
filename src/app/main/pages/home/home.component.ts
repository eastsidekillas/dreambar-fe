import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../../shared/components/slider/slider.component';
import { CardListComponent } from '../../../shared/components/card-list/card-list.component';
import { GallaryComponent } from '../../../shared/components/gallary/gallary.component';
import { ApiService } from '../../../core/api.service';

interface EventItem {
  imageUrl: string;
  title: string;
  description: string;
  link?: string;
  isPromotion?: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SliderComponent, CardListComponent, GallaryComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mixedEventsAndPromotions: EventItem[] = [];

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    try {
      // Получаем данные (мероприятия и акции)
      const data = await this.apiService.getMixedAllData();

      // Форматируем данные
      this.mixedEventsAndPromotions = data.map((item: any) => ({
        imageUrl: item.image || 'default.jpg',  // Если изображения нет, используем дефолтное
        title: item.title,
        description: item.description,
        link: `/afisha/${item.slug}`,  // Пример ссылки на событие/акцию
        isPromotion: item.isPromotion
      }));


    } catch (error) {
      console.error('Ошибка загрузки данных:', error);
    }
  }

}

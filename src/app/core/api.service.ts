import { Injectable } from '@angular/core';
import ky from 'ky';
import {environment} from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private client = ky.create({
    prefixUrl: environment.baseURL,
  });


  constructor() { }

  // Получить список всех мероприятий
  async getEvents(): Promise<any> {
    try {
      return await this.client.get('events/').json();
    } catch (error) {
      console.error('Ошибка при получении списка мероприятий:', error);
      throw error;
    }
  }

  // Получить список всех акций
  async getOffers(): Promise<any> {
    try {
      return await this.client.get('offers/').json();
    } catch (error) {
      console.error('Ошибка при получении списка мероприятий:', error);
      throw error;
    }
  }

  // Получить рандомные события и акции
  async getMixedAllData(): Promise<any> {
    try {
      return await this.client.get(`getMixedAllData/`).json();
    } catch (error) {
      console.error(`Ошибка получения данных`, error);
      throw error;
    }
  }

  // Получить конкретное мероприятие по Slug
  async getEventBySlug(slug: string): Promise<any> {
    try {
      return await this.client.get(`events/${slug}/`).json();
    } catch (error) {
      console.error(`Ошибка при получении мероприятия ${slug}:`, error);
      throw error;
    }
  }

  // Получить конкретную акцию по Slug
  async getOfferBySlug(slug: string): Promise<any> {
    try {
      return await this.client.get(`offers/${slug}/`).json();
    } catch (error) {
      console.error(`Ошибка при получении мероприятия ${slug}:`, error);
      throw error;
    }
  }



  // Получить все события и акции
  async postReservData(formData: any): Promise<any> {
    try {
      return await this.client.post('reserv/', {
        json: formData,
      }).json();
    } catch (error) {
      console.error('Ошибка при отправке бронирования:', error);
      throw error;
    }
  }


}

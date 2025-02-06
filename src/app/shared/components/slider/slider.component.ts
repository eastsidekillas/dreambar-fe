import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild} from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { NgForOf } from '@angular/common';
import {ApiService} from '../../../core/api.service';


interface EventItem {
  id: number;
  banner_image: string;
  title: string;
  link?: string;
  isPromotion?: boolean;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider.component.html',
  imports: [NgForOf],
  styleUrl: './slider.component.css'
})
export class SliderComponent implements AfterViewInit, OnInit {
  eventSlides: EventItem[] = [];
  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef<SwiperContainer>;


  private swiper!: SwiperContainer;

  ngAfterViewInit() {
    this.swiper = this.swiperContainer.nativeElement;
    Object.assign(this.swiper, {
      initialSlide: 0,
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      }
    });
    this.swiper.initialize();
  }



  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    try {
      const events = await this.apiService.getEvents();
      this.eventSlides = events.map((event: any) => ({
        banner_image: event.banner_image || 'default.jpg',
        link: `/afisha/${event.slug}`,
        isPromotion: false
      }));
    } catch (error) {
      console.error('Ошибка загрузки мероприятий:', error);
    }
  }

  prevSlide() {
    this.swiper.swiper.slidePrev();
  }

  nextSlide() {
    this.swiper.swiper.slideNext();
  }
}

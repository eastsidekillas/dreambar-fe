import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { NgForOf } from '@angular/common';

interface Slide {
  id: number;
  title: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './slider.component.html',
  imports: [NgForOf],
  styleUrl: './slider.component.css'
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef<SwiperContainer>;

  eventSlides: Slide[] = [
    { id: 1, title: 'Событие 1', imageUrl: 'banners/banner.jpg' },
    { id: 2, title: 'Событие 2', imageUrl: 'event2.jpg' },
    { id: 3, title: 'Событие 3', imageUrl: 'event3.jpg' }
  ];

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

  prevSlide() {
    this.swiper.swiper.slidePrev();
  }

  nextSlide() {
    this.swiper.swiper.slideNext();
  }
}

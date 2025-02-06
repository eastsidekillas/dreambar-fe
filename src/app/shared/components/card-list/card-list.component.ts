import {Component, Input,} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-card-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {
  @Input() title!: string;
  @Input() items!: { imageUrl: string; title: string; description: string; link?: string; isPromotion?: boolean }[];

}

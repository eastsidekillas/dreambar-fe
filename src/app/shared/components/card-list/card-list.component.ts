import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-card-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input() title!: string;
  @Input() items!: { imageUrl: string; title: string; description: string; link?: string; isPromotion?: boolean }[];
  @Input() columns!: number;  // Количество колонок
  @Input() columnsmd!: number;
  @Input() columnssm!: number;

  gridClasses: string = '';

  ngOnInit() {
    this.gridClasses = `grid grid-cols-${this.columns} sm:grid-cols-${this.columnssm} md:grid-cols-${this.columnsmd} gap-6 flex-1`;
  }
}

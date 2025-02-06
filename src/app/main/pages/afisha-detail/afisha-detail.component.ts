import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../../core/api.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-afisha-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './afisha-detail.component.html',
  styleUrl: './afisha-detail.component.css'
})
export class AfishaDetailComponent implements OnInit {
  event: any

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  async ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.event = await this.apiService.getEventBySlug(slug);
    }
  }
}

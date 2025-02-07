import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-age-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './age-modal.component.html',
  styleUrl: './age-modal.component.css'
})
export class AgeModalComponent implements OnInit {
  showAgeModal = false;

  ngOnInit() {
    const ageConfirmed = localStorage.getItem('ageConfirmed');
    if (!ageConfirmed) {
      this.showAgeModal = true;
    }
  }

  confirmAge(isConfirmed: boolean) {
    if (isConfirmed) {
      localStorage.setItem('ageConfirmed', 'true');
      this.showAgeModal = false;
    } else {
      window.location.href = 'https://ya.ru';
    }
  }
}

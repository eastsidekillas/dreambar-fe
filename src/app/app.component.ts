import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AgeModalComponent} from './shared/components/age-modal/age-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgeModalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Исправлено
})
export class AppComponent {}


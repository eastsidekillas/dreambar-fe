import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-reserv',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reserv.component.html',
  styleUrls: ['./reserv.component.css'],
})
export class ReservComponent implements OnInit {
  public name: string = '';
  public phone: string = '';
  public captchaAnswer: string = '';
  public captchaQuestion: string = '';
  private captchaCorrectAnswer: number = 0;
  showCaptcha: boolean = false;
  isFormSubmitted: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.generateCaptcha();
  }

  generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    this.captchaCorrectAnswer = num1 + num2;
    this.captchaQuestion = `${num1} + ${num2} = ?`;
  }

  checkForm() {
    this.showCaptcha = this.name.trim().length > 0 && this.phone.trim().length > 0;
  }

  onClose() {
    this.isFormSubmitted = false;
    this.showCaptcha = false;
    this.captchaAnswer = ''
    this.name = ''
    this.phone = ''
  }

  async onSubmit() {
    if (this.name.trim() && this.phone.trim() && this.captchaAnswer.trim()) {
      const userAnswer = parseInt(this.captchaAnswer, 10);
      if (userAnswer === this.captchaCorrectAnswer) {
        const formData = {
          name: this.name.trim(),
          phone: this.formatPhone(this.phone.trim()),
        };

        console.log('Отправляемые данные:', formData);

        try {
          const response = await this.apiService.postReservData(formData);
          console.log('Заявка отправлена успешно:', response);
          this.isFormSubmitted = true;
        } catch (error) {
          console.error('Ошибка при отправке заявки:', error);
          alert('Произошла ошибка при отправке заявки.');
        }
      } else {
        alert('Неверный ответ на контрольный вопрос!');
      }
    } else {
      alert('Пожалуйста, заполните все поля.');
    }
  }

  formatPhone(phone: string): string {
    phone = phone.replace(/\D/g, '');
    if (phone.startsWith('8')) {
      phone = '+7' + phone.slice(1);
    }
    return phone;
  }
}

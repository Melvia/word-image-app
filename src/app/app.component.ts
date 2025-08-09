import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    FormsModule,
    NgIf
  ],
  standalone: true
})
export class AppComponent {
  input: string = '';
  currentStep: number = 0; // индекс текущего слова для угадывания

  // Список слов и соответствующих картинок в нужном порядке
  wordsToImages: { word: string; imageUrl: string }[] = [
    {
      word: 'apple',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg',
    },
    {
      word: 'cat',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg',
    },
    {
      word: 'dog',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg',
    },
  ];

  isCorrect: boolean | null = null; // состояние правильности текущего ввода

  // Проверяем слово по нажатию кнопки
  onConfirmClick() {
    const val = this.input.toLowerCase().trim();

    if (val === this.wordsToImages[this.currentStep].word) {
      this.isCorrect = true;
      this.currentStep++;
      this.input = '';

      if (this.currentStep >= this.wordsToImages.length) {
        this.isCorrect = null;
      }
    } else if (val.length > 0) {
      this.isCorrect = false;
    } else {
      this.isCorrect = null;
    }
  }

}


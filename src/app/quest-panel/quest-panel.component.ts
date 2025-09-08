import {Component} from '@angular/core';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-quest-panel',
  templateUrl: './quest-panel.component.html',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  styleUrl: './quest-panel.component.scss'
})
export class QuestPanelComponent {
  input: string = '';
  currentStep: number = 0; // индекс текущего слова для угадывания

  // Список слов и соответствующих картинок в нужном порядке
  wordsToImages: { word: string; imageUrl: string }[] = [
    {
      word: 'тир',
      imageUrl: 'assets/images/05.jpg',
    },
    {
      word: 'май',
      imageUrl: 'assets/images/10.jpg',
    },
    {
      word: 'гребешок',
      imageUrl: 'assets/images/15.jpg',
    },
    {
      word: 'Лермонтов',
      imageUrl: 'assets/images/20.jpg',
    },
    {
      word: 'морская',
      imageUrl: 'assets/images/25.jpg',
    },
    {
      word: 'о',
      imageUrl: 'assets/images/30.jpg',
    },
    {
      word: 'свинья',
      imageUrl: 'assets/images/30.jpg',
    },
    {
      word: 'покрывало',
      imageUrl: 'assets/images/30.jpg',
    },
    {
      word: 'самовар',
      imageUrl: 'assets/images/30.jpg',
    },
    {
      word: '42',
      imageUrl: 'assets/images/30.jpg',
    },
    {
      word: 'помогите',
      imageUrl: 'assets/images/30.jpg',
    },
  ];

  isCorrect: boolean | null = null; // состояние правильности текущего ввода

  // Проверяем слово по нажатию кнопки
  onConfirmClick() {
    const format = (value: string) => value.toLowerCase().trim();
    const val = format(this.input);

    if (val === format(this.wordsToImages[this.currentStep].word)) {
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

import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, NgForOf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input() title: string = 'No Title';
  @Input() lessonCount: string = '0';
  @Input() instructor: string = 'Jhon Doe';
  @Input() instructorDate: string = '9999-99-99';
  @Input() editor: string = 'Jhon Doe';
  @Input() editorDate: string = '9999-99-99';
}

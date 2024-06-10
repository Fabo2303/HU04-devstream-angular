import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

import courses from '../app/assets/courses.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsideComponent, HeaderComponent, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'devstream';
  activeCourses = courses.filter(course => course.status);
  inactiveCourses = courses.filter(course => !course.status);
}

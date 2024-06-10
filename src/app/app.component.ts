import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';

import { FilterService } from './services/filter.service';
import { Course } from './data/courses';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsideComponent, HeaderComponent, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'devstream';
  private filterService = inject(FilterService);
  
  activeCourses: Course[] = [];
  inactiveCourses: Course[] = [];
  
  ngOnInit(){
    this.activeCourses = this.filterService.getActiveCourses();
    this.inactiveCourses = this.filterService.getInactiveCourses();
  }

  searchCourses(searchTerm: Event){
    const value = (searchTerm.target as HTMLInputElement).value;
    this.filterService.filterCourses(value);
    this.activeCourses = this.filterService.getActiveCourses();
    this.inactiveCourses = this.filterService.getInactiveCourses();
  }
}

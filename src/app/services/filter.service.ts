import { inject, Injectable } from '@angular/core';
import { Course } from '../data/courses';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private coursesService = inject(CoursesService);
  private courses: Course[] = [];
  private coursesTemp: Course[] = [];


  constructor() {
    this.coursesService.getCourses().subscribe((data) => {
      this.courses = data as Course[];
      this.coursesTemp = data as Course[];
    });
  }

  getActiveCourses(cursos: Course[] = this.coursesTemp) {
    return cursos.filter(course => course.status);
  }

  getInactiveCourses(cursos: Course[] = this.coursesTemp) {
    return cursos.filter(course => !course.status);
  }

  filterCourses(searchTerm: string){
    if (!searchTerm || searchTerm.length === 0) {
      this.coursesTemp = this.courses;
    }
    this.coursesTemp = this.coursesTemp.filter(course => {
      return course.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  } 
}

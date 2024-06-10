import { Injectable } from '@angular/core';
import courses from '../assets/courses.json';
import { Course } from '../data/courses';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private coursesTemp = courses as Course[];

  getActiveCourses(cursos: Course[] = this.coursesTemp) {
    return cursos.filter(course => course.status);
  }

  getInactiveCourses(cursos: Course[] = this.coursesTemp) {
    return cursos.filter(course => !course.status);
  }

  filterCourses(searchTerm: string){
    if (!searchTerm || searchTerm.length === 0) {
      this.coursesTemp = courses;
    }
    this.coursesTemp = this.coursesTemp.filter(course => {
      return course.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  } 
}

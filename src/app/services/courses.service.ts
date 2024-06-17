import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Course } from '../data/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private http = inject(HttpClient);

  getCourses() {
    return this.http.get('http://localhost:8080/api/course/findAll');
  }
}

import { Injectable } from '@angular/core';

import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import ObjectID from 'bson-objectid';
import {Student} from '../models/Student.module';
import {School} from '../models/School.module';
import {Professor} from '../models/Professor.module';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [];
  studentSubject = new Subject<Student[]>() ;
  url = 'http://localhost:8080/student';
  constructor(private  http: HttpClient) { }

  emitStudentSubject() {
    this.studentSubject.next(this.students);
  }

  createNewStudent(student: Student) {
    this.students.push(student);
    this.emitStudentSubject();
    return this.http.post<boolean>(this.url + '/add' , student ).subscribe(
      (data) => {
        this.getStudents();
        console.log('create');
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }
  getStudents() {
    this.http.get<Student[]>(this.url + '/getAll').subscribe(
      (data) => {
        this.students = data;
        this.emitStudentSubject();
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }

  getStudentsBySchoolId(school: School) {
    this.http.get<Student[]>(this.url + '/getBySchoolId/'  + school.id).subscribe(
          (students) => {
            this.students = students;
            this.emitStudentSubject();
          }, (error) => {
            console.log('Erreur : ' + error);
          }
        );
  }
  getStudentById(id: number) {
    const student = this.students.find(
      (s) => {
        return s.id === id;
      }
    );
    return student;
  }
  deleteStudent(id: number) {
    const index = this.students.indexOf(this.getStudentById(id));
    this.students.splice(index, 1);
    this.emitStudentSubject();
    this.http.delete(this.url + '/delete/' + id)
      .subscribe(
        ()  => {
          this.getStudents();
          console.log('Delete ');
        },
        error  => {
          console.log('Error ', error);
        }
      );
  }

  updateStudent(student: Student) {
    this.http
      .put<any>(this.url + '/update', student)
      .subscribe(
        () => {
          this.getStudents();
          console.log('Update !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getStudentList() {
    this.getStudents();
    return this.students;
  }
  getStudentByUsernameAndPassword(username: string, password: string) {
    const student = this.students.find(
      (ad) => {
        return ad.account.userName === username && ad.account.password === password;
      }
    );
    return student;
  }
  getStudentByUsernameAndPasswordFromDB(username: string, password: string) {
    return this.http.get<Student>(this.url + '/getByUsernameAndPassword/' + username + '/' + password);
  }
}

import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import ObjectID from 'bson-objectid';
import {Homework} from '../models/Homework.module';


@Injectable({
  providedIn: 'root'
})
export class HomeworkService {

  homeworks: Homework[] = [];
  homeworkSubject = new Subject<Homework[]>() ;
  url = 'http://localhost:8080/homework';
  constructor(private  http: HttpClient) { }

  emitHomeworkSubject() {
    this.homeworkSubject.next(this.homeworks);
  }

  createNewHomework(homework: Homework) {
    this.homeworks.push(homework);
    this.emitHomeworkSubject();
    return this.http.post<boolean>(this.url + '/add' , homework ).subscribe(
      (data) => {
        this.getHomeworks();
        console.log('create');
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }
  getHomeworks() {
    this.http.get<Homework[]>(this.url + '/getAll').subscribe(
      (data) => {
        alert(data);
        this.homeworks = data;
        this.emitHomeworkSubject();
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }

  getHomeworkById(id: number) {
    const homework = this.homeworks.find(
      (h) => {
        return h.id === id;
      }
    );
    return homework;
  }
  deleteHomework(id: number) {
    const index = this.homeworks.indexOf(this.getHomeworkById(id));
    this.homeworks.splice(index, 1);
    this.emitHomeworkSubject();
    this.http.delete(this.url + '/delete/' + id)
      .subscribe(
        ()  => {
          this.getHomeworks();
          console.log('Delete ');
        },
        error  => {
          console.log('Error ', error);
        }
      );
  }

  updateHomework(homework: Homework) {
    this.http
      .put<any>(this.url + '/update', homework)
      .subscribe(
        () => {
          this.getHomeworks();
          console.log('Update !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getHomeworkList() {
    this.getHomeworks();
    return this.homeworks;
  }
}

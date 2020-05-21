import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import ObjectID from 'bson-objectid';
import {Level} from '../models/Level.module';
import {School} from '../models/School.module';
import {Student} from '../models/Student.module';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  levels: Level[] = [];
  levelSubject = new Subject<Level[]>() ;
  url = 'http://localhost:8080/level';
  constructor(private  http: HttpClient) { }

  emitLevelSubject() {
    this.levelSubject.next(this.levels);
  }

  createNewLevel(level: Level) {
    this.levels.push(level);
    this.emitLevelSubject();
    return this.http.post<boolean>(this.url + '/add' , level ).subscribe(
      (data) => {
        this.getLevels();
        console.log('create');
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }
  getLevels() {
    this.http.get<Level[]>(this.url + '/getAll').subscribe(
      (data) => {
        this.levels = data;
        this.emitLevelSubject();
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }

  getLevelById(id: number) {
    const level = this.levels.find(
      (l) => {
        return l.id === id;
      }
    );
    return level;
  }
  deleteLevel(id: number) {
    const index = this.levels.indexOf(this.getLevelById(id));
    this.levels.splice(index, 1);
    this.emitLevelSubject();
    this.http.delete(this.url + '/delete/' + id)
      .subscribe(
        ()  => {
          this.getLevels();
          console.log('Delete ');
        },
        error  => {
          console.log('Error ', error);
        }
      );
  }

  updateLevel(level: Level) {
    this.http
      .put<any>(this.url + '/update', level)
      .subscribe(
        () => {
          this.getLevels();
          console.log('Update !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
  getLevelsBySchoolId(school: School) {
    this.http.get<Level[]>(this.url + '/getBySchoolId/'  + school.id).subscribe(
      (levels) => {
        this.levels = levels;
        this.emitLevelSubject();
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }

  getLevelList() {
    this.getLevels();
    return this.levels;
  }
}

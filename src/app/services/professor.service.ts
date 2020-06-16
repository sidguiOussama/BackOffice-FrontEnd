import { Injectable } from '@angular/core';

import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import ObjectID from 'bson-objectid';
import {Professor} from '../models/Professor.module';
import {School} from '../models/School.module';
import {Student} from '../models/Student.module';
import {Administrator} from '../models/Administrator.module';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  professors: Professor[] = [];
  professorSubject = new Subject<Professor[]>() ;
  url = 'http://localhost:8080/professor';
  constructor(private  http: HttpClient) { }

  emitProfessorSubject() {
    this.professorSubject.next(this.professors);
  }

  createNewProfessor(professor: Professor) {
    this.professors.push(professor);
    this.emitProfessorSubject();
    return this.http.post<boolean>(this.url + '/add' , professor ).subscribe(
      (data) => {
        this.getProfessors();
        console.log('create');
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }
  getProfessors() {
    this.http.get<Professor[]>(this.url + '/getAll').subscribe(
      (data) => {
        this.professors = data;
        this.emitProfessorSubject();
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }

  getProfessorById(id: number) {
    const professor = this.professors.find(
      (p) => {
        return p.id === id;
      }
    );
    return professor;
  }
  deleteProfessor(id: number) {
    const index = this.professors.indexOf(this.getProfessorById(id));
    this.professors.splice(index, 1);
    this.emitProfessorSubject();
    this.http.delete(this.url + '/delete/' + id)
      .subscribe(
        ()  => {
          this.getProfessors();
          console.log('Delete ');
        },
        error  => {
          console.log('Error ', error);
        }
      );
  }

  updateProfessor(professor: Professor) {
    this.http
      .put<any>(this.url + '/update', professor)
      .subscribe(
        () => {
          this.getProfessors();
          console.log('Update !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getProfessorsBySchoolId(school: School) {
    this.http.get<Professor[]>(this.url + '/getBySchoolId/'  + school.id).subscribe(
      (professors) => {
        this.professors = professors;
        this.emitProfessorSubject();
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }
  getProfessorList() {
    this.getProfessors();
    return this.professors;
  }
  getProfesssorByUsernameAndPassword(username: string, password: string) {
    const professor = this.professors.find(
      (ad) => {
        return ad.account.userName === username && ad.account.password === password;
      }
    );
    return professor;
  }
  getProfesssorByUsernameAndPasswordFromDB(username: string, password: string) {
    return this.http.get<Professor>(this.url + '/getByUsernameAndPassword/' + username + '/' + password);
  }
}

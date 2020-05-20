import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import ObjectID from 'bson-objectid';
import {File} from '../models/File.module';


@Injectable({
  providedIn: 'root'
})
export class FileService {

  files: File[] = [];
  fileSubject = new Subject<File[]>() ;
  url = 'http://localhost:8080/file';
  constructor(private  http: HttpClient) { }

  emitFileSubject() {
    this.fileSubject.next(this.files);
  }

  createNewFile(file: File) {
    this.files.push(file);
    this.emitFileSubject();
    return this.http.post<boolean>(this.url + '/add' , file ).subscribe(
      (data) => {
        this.getFiles();
        console.log('create');
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }
  getFiles() {
    this.http.get<File[]>(this.url + '/getAll').subscribe(
      (data) => {
        alert(data);
        this.files = data;
        this.emitFileSubject();
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }

  getFileById(id: number) {
    const file = this.files.find(
      (f) => {
        return f.id === id;
      }
    );
    return file;
  }
  deleteFile(id: number) {
    const index = this.files.indexOf(this.getFileById(id));
    this.files.splice(index, 1);
    this.emitFileSubject();
    this.http.delete(this.url + '/delete/' + id)
      .subscribe(
        ()  => {
          this.getFiles();
          console.log('Delete ');
        },
        error  => {
          console.log('Error ', error);
        }
      );
  }

  updateFile(file: File) {
    this.http
      .put<any>(this.url + '/update', file)
      .subscribe(
        () => {
          this.getFiles();
          console.log('Update !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getFileList() {
    this.getFiles();
    return this.files;
  }
}

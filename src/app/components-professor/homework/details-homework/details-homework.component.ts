import { Component, OnInit } from '@angular/core';
import {Homework} from '../../../models/Homework.module';
import {Subject} from 'rxjs';
import {HomeworkService} from '../../../services/homework.service';
import {FileService} from '../../../services/file.service';
import {File} from '../../../models/File.module';
import {FileType} from '../../../models/enums/FileType';
import {Router} from '@angular/router';

@Component({
  selector: 'app-details-homework',
  templateUrl: './details-homework.component.html',
  styleUrls: ['./details-homework.component.css']
})
export class DetailsHomeworkComponent implements OnInit {

  currentHomework: Homework;
  files: File[] = [];
  filesSubject = new Subject<File[]>();
  constructor(private homeworkService: HomeworkService,
              private fileService: FileService,
              private router: Router) { }

  ngOnInit(): void {
    this.refresh();
  }

  emit() {
    this.filesSubject.next(this.files);
  }

  refresh() {
    this.currentHomework = this.homeworkService.currentHomework;
    this.fileService.getFilesByDocument(this.currentHomework).subscribe(
      (files) => {
        alert(files);
        this.files = files;
      }, (error) => {
        console.log('error' + error);
      }
    );
    this.emit();
  }

  onUpload(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const formData = new FormData();
      formData.append('file', event.target.files[0]);
      this.homeworkService.uploadFile(formData);
      const file = new File();
      file.document = this.currentHomework;
      file.feedBack = null;
      file.type = FileType.Homework;
      file.title = event.target.files[0].name;
      this.fileService.createNewFile(file).subscribe(
        () => {
          this.fileService.getFiles();
          this.refresh();
        }, (error) => {
          console.log('Erreur : ' + error);
        }
      );
    }

  }

  onDownload(file: string): void {
    const link = document.createElement('a');
    link.setAttribute('target', 'blank');
    link.setAttribute('href', 'localhost:8080/homework/download/' + file);
    link.setAttribute('download', file);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  onDelete(id: number) {
    this.fileService.deleteFile(id).subscribe(
      ()  => {
        this.fileService.getFiles();
        this.refresh();
        console.log('Delete ');
      },
      error  => {
        console.log('Error ', error);
      }
    );
    this.refresh();
  }

  onDocument() {
    this.router.navigate(['/professor/list-document', this.currentHomework.classRoom.id]);
  }

  onHomework() {
    this.router.navigate(['/professor/list-homework',  this.currentHomework.classRoom.id]);
  }

}

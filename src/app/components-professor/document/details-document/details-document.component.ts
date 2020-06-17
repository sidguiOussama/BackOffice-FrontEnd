import { Component, OnInit } from '@angular/core';
import {Document} from '../../../models/Document.module';
import {File} from '../../../models/File.module';
import {Subject} from 'rxjs';
import {DocumentService} from '../../../services/document.service';
import {FileService} from '../../../services/file.service';
import {FileType} from '../../../models/enums/FileType';
import {Router} from '@angular/router';

@Component({
  selector: 'app-details-document',
  templateUrl: './details-document.component.html',
  styleUrls: ['./details-document.component.css']
})
export class DetailsDocumentComponent implements OnInit {

  currentDocument: Document;
  files: File[] = [];
  filesSubject = new Subject<File[]>();
  constructor(private documentService: DocumentService,
              private fileService: FileService,
              private router: Router) { }

  ngOnInit(): void {
    this.refresh();
  }

  emit() {
    this.filesSubject.next(this.files);
  }

  refresh() {
    this.currentDocument = this.documentService.currentDocument;
    this.fileService.getFilesByDocument(this.currentDocument).subscribe(
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
      this.documentService.uploadFile(formData);
      const file = new File();
      file.document = this.currentDocument;
      file.feedBack = null;
      file.type = FileType.Document;
      file.title = event.target.files[0].name;
      this.fileService.createNewFile(file).subscribe(
        (data) => {
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
    link.setAttribute('href', 'localhost:8080/document/download/' + file);
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
  }

  onDocument() {
    this.router.navigate(['/professor/list-document', this.currentDocument.classRoom.id]);
  }

  onHomework() {
    this.router.navigate(['/professor/list-homework',  this.currentDocument.classRoom.id]);
  }

}

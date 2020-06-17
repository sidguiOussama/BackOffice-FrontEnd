import { Component, OnInit } from '@angular/core';
import {DocumentService} from '../../../services/document.service';
import {FileService} from '../../../services/file.service';
import {Subject} from 'rxjs';
import {Document} from '../../../models/Document.module';
import {File} from '../../../models/File.module';
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
        this.files.reverse();
      }, (error) => {
        console.log('error' + error);
      }
    );
    this.emit();
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

  onDocument() {
    this.router.navigate(['/student/list-document', this.currentDocument.classRoom.id]);
  }

  onHomework() {
    this.router.navigate(['/student/list-homework',  this.currentDocument.classRoom.id]);
  }

}

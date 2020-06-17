import { Component, OnInit } from '@angular/core';
import {FileService} from '../../../services/file.service';
import {DocumentService} from '../../../services/document.service';
import {ClassRoomService} from '../../../services/class-room.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Document} from '../../../models/Document.module';

@Component({
  selector: 'app-list-document',
  templateUrl: './list-document.component.html',
  styleUrls: ['./list-document.component.css']
})
export class ListDocumentComponent implements OnInit {

  documents: Document[] = [];
  idCurrentClassRoom: number;

  constructor(private fileService: FileService,
              public documentService: DocumentService,
              public classRoomService: ClassRoomService,
              public router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        this.idCurrentClassRoom = +params.get('id');
        this.documentService.getDocumentsByClassRoomId(this.idCurrentClassRoom).subscribe(
          (data: Document[]) => {
            this.documents = data;
          }, (error) => {
            console.log('Error getDocsById(id)');
          }
        );
      }
    );
  }

  onDetails(document: Document): void {
    this.documentService.currentDocument = document;
    this.router.navigate((['student/details-document']));
  }

  onHomework() {
    this.router.navigate(['/student/list-homework', this.idCurrentClassRoom]);
  }

}

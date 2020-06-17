import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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

  createForm: FormGroup;
  documents: Document[] = [];
  idCurrentClassRoom: number;

  constructor(private fileService: FileService,
              public documentService: DocumentService,
              public classRoomService: ClassRoomService,
              public router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.init();
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        this.idCurrentClassRoom = +params.get('id');
        this.documentService.getDocumentsByClassRoomId(this.idCurrentClassRoom).subscribe(
          (data: Document[]) => {
            this.documents = data.reverse();
          }, (error) => {
            console.log('Error getDocsById(id)');
          }
        );
      }
    );

  }

  init(): void {
    this.createForm = new FormGroup({
      title: new FormControl('', Validators.required),
    });
  }

  onDetails(document: Document): void {
    this.documentService.currentDocument = document;
    this.router.navigate((['professor/details-document']));
  }

  onSubmit() {
    const document = new Document();
    document.title = this.createForm.get('title').value;
    document.classRoom = this.classRoomService.getClassRoomById(this.idCurrentClassRoom);
    /*document.professor = ;*/
    alert(JSON.stringify(document));
    this.documentService.createNewDocument(document).subscribe(
      (success) => {
        this.documentService.getDocumentsByClassRoomId(this.idCurrentClassRoom).subscribe(
          (data: Document[]) => {
            this.documents = data.reverse();
          }, (error) => {
            console.log('Error getDocsById(id)');
          }
        );
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
    this.createForm.setValue({
      title: ''
    });
  }

  onDelete(document: Document) {
    this.documentService.deleteDocument(document.id);
  }

  onHomework() {
    this.router.navigate(['/professor/list-homework', this.idCurrentClassRoom]);
  }


}

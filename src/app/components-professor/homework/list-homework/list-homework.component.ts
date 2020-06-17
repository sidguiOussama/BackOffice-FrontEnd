import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Homework} from '../../../models/Homework.module';
import {Subscription} from 'rxjs';
import {FileService} from '../../../services/file.service';
import {HomeworkService} from '../../../services/homework.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Document} from '../../../models/Document.module';
import {ClassRoomService} from '../../../services/class-room.service';

@Component({
  selector: 'app-list-homework',
  templateUrl: './list-homework.component.html',
  styleUrls: ['./list-homework.component.css']
})
export class ListHomeworkComponent implements OnInit {

  createForm: FormGroup;
  homeworks: Homework[] = [];
  idCurrentClassRoom: number;

  constructor(private fileService: FileService,
              private homeworkService: HomeworkService,
              public classRoomService: ClassRoomService,
              public router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.init();
    this.init();
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        this.idCurrentClassRoom = +params.get('id');
        this.homeworkService.getHomeworksByClassRoomId(this.idCurrentClassRoom).subscribe(
          (data: Homework[]) => {
            alert(JSON.stringify(data));
            this.homeworks = data.reverse();
          }, (error) => {
            console.log('Error getHomeworksById(id)');
          }
        );
      }
    );
  }

  init(): void {
    this.createForm = new FormGroup({
      title: new FormControl('', Validators.required),
      delivringDateTime: new FormControl('', Validators.required)
    });
  }

  onDetails(homework: Homework): void {
    this.homeworkService.currentHomework = homework;
    this.router.navigate((['professor/details-homework']));
  }

  onSubmit() {
    const homework = new Homework();
    homework.title = this.createForm.get('title').value;
    // delivring date && time
    homework.delivringDateTime = this.createForm.get('delivringDateTime').value;
    homework.classRoom = this.classRoomService.getClassRoomById(this.idCurrentClassRoom);
    alert(JSON.stringify(document));
    this.homeworkService.createNewHomework(homework).subscribe(
      (success) => {
        this.homeworkService.getHomeworksByClassRoomId(this.idCurrentClassRoom).subscribe(
          (data: Homework[]) => {
            this.homeworks = data.reverse();
          }, (error) => {
            console.log('Error getHomeworksById(id)');
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

  onDelete(homework: Homework) {
    this.homeworkService.deleteHomework(homework.id);
  }

  onDocument() {
    this.router.navigate(['/professor/list-document', this.idCurrentClassRoom]);
  }

}

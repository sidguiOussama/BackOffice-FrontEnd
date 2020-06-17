import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Homework} from '../../../models/Homework.module';
import {FileService} from '../../../services/file.service';
import {HomeworkService} from '../../../services/homework.service';
import {ClassRoomService} from '../../../services/class-room.service';
import {ActivatedRoute, Router} from '@angular/router';

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

  onDetails(homework: Homework): void {
    this.homeworkService.currentHomework = homework;
    this.router.navigate((['/student/details-homework']));
  }

  onDocument() {
    this.router.navigate(['/student/list-document', this.idCurrentClassRoom]);
  }

}

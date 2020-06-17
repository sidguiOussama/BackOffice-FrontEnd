import { Component, OnInit } from '@angular/core';
import {ClassRoom} from '../../../models/ClassRoom.module';
import {Subscription} from 'rxjs';
import {ClassRoomService} from '../../../services/class-room.service';
import {ProfessorService} from '../../../services/professor.service';
import {StudentService} from '../../../services/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-class-room-student',
  templateUrl: './list-class-room-student.component.html',
  styleUrls: ['./list-class-room-student.component.css']
})
export class ListClassRoomStudentComponent implements OnInit {

  classRooms: ClassRoom[] = [];
  classRoomsSubscription: Subscription;
  constructor(private classRoomService: ClassRoomService, private studentService: StudentService,
              private router: Router) { }

  init() {
    this.classRoomService.getClassRooms();
    this.studentService.getStudentByUsernameAndPasswordFromDB(localStorage.getItem('username'),
      localStorage.getItem('password')).subscribe(
      (data) => {
        this.classRoomService.getClassRoomByLevelId(data.level);
        this.classRoomsSubscription = this.classRoomService.classRoomSubject.subscribe(
          (classRooms: ClassRoom[]) => {
            this.classRooms = classRooms;
          }
        );
      }
    );
  }
  ngOnInit(): void {
    this.init();
  }

  onSelectClassRoom(classRoom: ClassRoom) {
    this.router.navigate(['/student/list-document', classRoom.id]);
  }

}

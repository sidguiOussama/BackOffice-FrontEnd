import { Component, OnInit } from '@angular/core';
import {Student} from '../../../models/Student.module';
import {Subscription} from 'rxjs';
import {Professor} from '../../../models/Professor.module';
import {StudentService} from '../../../services/student.service';
import {AdministratorService} from '../../../services/administrator.service';
import {ProfessorService} from '../../../services/professor.service';
import {ClassRoom} from '../../../models/ClassRoom.module';
import {ClassRoomService} from '../../../services/class-room.service';

@Component({
  selector: 'app-list-class-room',
  templateUrl: './list-class-room.component.html',
  styleUrls: ['./list-class-room.component.css']
})
export class ListClassRoomComponent implements OnInit {

  classRooms: ClassRoom[] = [];
  classRoomsSubscription: Subscription;
  constructor(private classRoomService: ClassRoomService, private administratorService: AdministratorService) { }

  init() {
    this.classRoomService.getClassRooms();
    this.administratorService.getAdministratorByUsernameAndPasswordFromDB(localStorage.getItem('username'),
      localStorage.getItem('password')).subscribe(
      (data) => {
        this.classRoomService.getClassRoomBySchoolId(data.account.school);
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

}

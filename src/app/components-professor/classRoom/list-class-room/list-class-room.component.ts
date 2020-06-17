import { Component, OnInit } from '@angular/core';
import {ClassRoom} from '../../../models/ClassRoom.module';
import {Subscription} from 'rxjs';
import {ClassRoomService} from '../../../services/class-room.service';
import {AdministratorService} from '../../../services/administrator.service';
import {ProfessorService} from '../../../services/professor.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-class-room',
  templateUrl: './list-class-room.component.html',
  styleUrls: ['./list-class-room.component.css']
})
export class ListClassRoomComponent implements OnInit {

  classRooms: ClassRoom[] = [];
  classRoomsSubscription: Subscription;
  constructor(private classRoomService: ClassRoomService, private professorService: ProfessorService,
              private router: Router) { }

  init() {
    this.classRoomService.getClassRooms();
    this.professorService.getProfesssorByUsernameAndPasswordFromDB(localStorage.getItem('username'),
      localStorage.getItem('password')).subscribe(
      (data) => {
        this.classRoomService.getClassRoomByProfessorId(data);
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
    this.router.navigate(['/professor/list-document', classRoom.id]);
  }
}

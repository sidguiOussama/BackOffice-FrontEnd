import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Level} from '../../../models/Level.module';
import {Subscription} from 'rxjs';

import {AccountService} from '../../../services/account.service';
import {LevelService} from '../../../services/level.service';
import {AdministratorService} from '../../../services/administrator.service';
import {ClassRoomService} from '../../../services/class-room.service';
import {Professor} from '../../../models/Professor.module';
import {ProfessorService} from '../../../services/professor.service';
import {Student} from '../../../models/Student.module';
import {Account} from '../../../models/Account.module';
import {ClassRoom} from '../../../models/ClassRoom.module';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-class-room',
  templateUrl: './new-class-room.component.html',
  styleUrls: ['./new-class-room.component.css']
})
export class NewClassRoomComponent implements OnInit {

  classRoomForm: FormGroup;
  classRoom: ClassRoom;
  levels: Level[] = [];
  levelSubscription: Subscription;
  professors: Professor[] = [];
  professorSubscription: Subscription;
  constructor(private classRoomService: ClassRoomService, private  accountService: AccountService,
              private levelService: LevelService, private administratorService: AdministratorService,
              private professorService: ProfessorService, private router: Router ) { }


  init() {
    this.administratorService.getAdministratorByUsernameAndPasswordFromDB(localStorage.getItem('username'),
      localStorage.getItem('password')).subscribe(
      (data) => {
        this.levelService.getLevelsBySchoolId(data.account.school);
        this.levelSubscription = this.levelService.levelSubject.subscribe(
          (levels: Level[]) => {
            this.levels = levels;
          }
        );
        this.professorService.getProfessorsBySchoolId(data.account.school);
        this.professorSubscription = this.professorService.professorSubject.subscribe(
          (professors: Professor[]) => {
            this.professors = professors;
          }
        );
      }
    );
    this.administratorService.getAdministrators();
    this.classRoomForm = new FormGroup({
      name: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
      professor: new FormControl('', Validators.required)

    });
  }
  ngOnInit(): void {
    this.init();
  }

  OnSubmit() {

    const administrator = this.administratorService.getAdministratorByUsernameAndPassword(localStorage.getItem('username'),
      localStorage.getItem('password'));
    if ( administrator !== undefined) {
      this.classRoom = new ClassRoom();
      const level: Level = this.classRoomForm.get('level').value;
      const professor: Professor = this.classRoomForm.get('professor').value;
      const name: string = this.classRoomForm.get('name').value;
      this.classRoom.name = name;
      this.classRoom.level = level;
      this.classRoom.professor = professor;
      this.classRoomService.createNewClassRoom(this.classRoom);
      alert('Bien enregistre ');
      this.router.navigate(['list-classRoom']);
    } else {
      alert('User not exist');
    }
  }

}

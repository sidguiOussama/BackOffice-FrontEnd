import { Component, OnInit } from '@angular/core';
import {Student} from '../../../models/Student.module';
import {Subscription} from 'rxjs';
import {StudentService} from '../../../services/student.service';
import {AdministratorService} from '../../../services/administrator.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss']
})
export class ListStudentsComponent implements OnInit {

  students: Student[] = [];
  studentsSubscription: Subscription;
  constructor(private studentService: StudentService, private administratorService: AdministratorService) {
  }
  init() {
    this.administratorService.getAdministratorByUsernameAndPasswordFromDB(localStorage.getItem('username'),
      localStorage.getItem('password')).subscribe(
      (data) => {
        alert(JSON.stringify(data));
        this.studentService.getStudentsBySchoolId(data.account.school);
        this.studentsSubscription = this.studentService.studentSubject.subscribe(
          (students: Student[]) => {
            this.students = students;
          }
        );
      }
    );
  }
  ngOnInit(): void {
    alert('test');
    this.init();
  }

}

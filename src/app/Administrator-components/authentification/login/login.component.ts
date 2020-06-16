import { Component, OnInit } from '@angular/core';
import {AdministratorService} from '../../../services/administrator.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProfessorService} from '../../../services/professor.service';
import {StudentService} from '../../../services/student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private administratorService: AdministratorService,
              private professorService: ProfessorService,
              private studentService: StudentService,
              private router: Router) { }

  init() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  ngOnInit(): void {
    this.administratorService.getAdministrators();
    this.professorService.getProfessors();
    this.studentService.getStudents();
    this.init();
  }

  onSubmit() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    const administrator = this.administratorService.getAdministratorByUsernameAndPassword(username, password);
    const professor = this.professorService.getProfesssorByUsernameAndPassword(username, password);
    const student = this.studentService.getStudentByUsernameAndPassword(username, password);
    if ( administrator !== undefined) {
      localStorage.setItem('username', administrator.account.userName);
      localStorage.setItem('password', administrator.account.password);
      alert(localStorage.getItem('username'));
      this.router.navigate(['list-student']);
    } else if ( professor !== undefined) {
      localStorage.setItem('username', professor.account.userName);
      localStorage.setItem('password', professor.account.password);
      alert(localStorage.getItem('username'));
      this.router.navigate(['list-classRoomProfessor']);
    } else if ( student !== undefined) {
      localStorage.setItem('username', student.account.userName);
      localStorage.setItem('password', student.account.password);
      alert(localStorage.getItem('username'));
      this.router.navigate(['list-classRoomStudent']);
    } else {
      alert('user not exist');
    }
  }

}

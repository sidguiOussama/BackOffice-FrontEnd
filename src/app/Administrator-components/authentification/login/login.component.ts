import { Component, OnInit } from '@angular/core';
import {AdministratorService} from '../../../services/administrator.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private administratorService: AdministratorService, private router: Router) { }

  init(){
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  ngOnInit(): void {
    this.administratorService.getAdministrators();
    this.init();
  }

  onSubmit() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    const administrator = this.administratorService.getAdministratorByUsernameAndPassword(username, password);
    if ( administrator !== undefined) {
      localStorage.setItem('username', administrator.account.userName);
      localStorage.setItem('password', administrator.account.password);
      alert(localStorage.getItem('username'));
      this.router.navigate(['list-student']);
    } else {
      alert('User not exist');
    }
  }

}

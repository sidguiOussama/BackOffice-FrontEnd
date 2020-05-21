import { Component, OnInit } from '@angular/core';
import {LevelService} from '../../../services/level.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Level} from '../../../models/Level.module';
import {AdministratorService} from '../../../services/administrator.service';
import {Student} from '../../../models/Student.module';
import {Account} from '../../../models/Account.module';

@Component({
  selector: 'app-new-level',
  templateUrl: './new-level.component.html',
  styleUrls: ['./new-level.component.scss']
})
export class NewLevelComponent implements OnInit {

  levelForm: FormGroup;
  constructor(private levelService: LevelService, private administratorService: AdministratorService) { }

  ngOnInit(): void {
    this.administratorService.getAdministrators();
    this.init();
  }

  init(){
    this.levelForm = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  onSubmit() {

    const administrator = this.administratorService.getAdministratorByUsernameAndPassword(localStorage.getItem('username'),
      localStorage.getItem('password'));
    if ( administrator !== undefined) {
      const level = new Level();
      level.title = this.levelForm.get('name').value;
      level.school = administrator.account.school;
      this.levelService.createNewLevel(level);
      alert('Bien enregistre ');
    }else {
      alert('User not exist');
    }
  }
}

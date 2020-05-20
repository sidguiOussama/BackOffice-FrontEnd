import {NgModule} from '@angular/core';
import {Student} from './Student.module';
import {Session} from './Session.module';

@NgModule()
export class Absence {

  id: number;
  student: Student;
  session: Session;

  constructor() {}
}

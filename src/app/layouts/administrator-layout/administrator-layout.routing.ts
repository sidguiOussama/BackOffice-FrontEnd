import { Routes } from '@angular/router';

import {TestComponent} from '../../pages/test/test.component';
import {NewStudentComponent} from '../../Administrator-components/student/new-student/new-student.component';
import {ListStudentsComponent} from '../../Administrator-components/student/list-students/list-students.component';
import {NewProfessorComponent} from '../../Administrator-components/professor/new-professor/new-professor.component';
import {ListProfessorsComponent} from '../../Administrator-components/professor/list-professors/list-professors.component';
import {NewAdministratorComponent} from '../../Administrator-components/administrator/new-administrator/new-administrator.component';
import {NewLevelComponent} from '../../Administrator-components/Level/new-level/new-level.component';
import {LoginComponent} from '../../Administrator-components/authentification/login/login.component';
import {NewClassRoomComponent} from '../../Administrator-components/classRoom/new-class-room/new-class-room.component';
import {ListClassRoomComponent} from '../../Administrator-components/classRoom/list-class-room/list-class-room.component';

export const AdministratorLayoutRoutes: Routes = [
  { path: 'test',           component: TestComponent },
  { path: 'new-student', component: NewStudentComponent},
  { path: 'list-student', component: ListStudentsComponent},
  { path: 'new-professor', component: NewProfessorComponent},
  { path: 'list-professor', component: ListProfessorsComponent},
  { path: 'new-level', component: NewLevelComponent},
  { path: 'new-classRoom', component: NewClassRoomComponent},
  { path: 'list-classRoom', component: ListClassRoomComponent}
];

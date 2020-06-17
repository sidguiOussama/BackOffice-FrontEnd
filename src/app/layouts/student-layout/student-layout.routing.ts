import { Routes } from '@angular/router';

import {ListClassRoomStudentComponent} from '../../components-student/class-room/list-class-room-student/list-class-room-student.component';
import {ListDocumentComponent} from '../../components-student/document/list-document/list-document.component';
import {DetailsDocumentComponent} from '../../components-student/document/details-document/details-document.component';
import {ListHomeworkComponent} from '../../components-student/homework/list-homework/list-homework.component';
import {DetailsHomeworkComponent} from '../../components-student/homework/details-homework/details-homework.component';



export const StudentLayoutRoutes: Routes = [
  { path: 'list-classRoomStudent',           component: ListClassRoomStudentComponent },
  { path: 'student/list-document/:id', component: ListDocumentComponent },
  { path: 'student/details-document', component: DetailsDocumentComponent },
  { path: 'student/list-homework/:id', component: ListHomeworkComponent },
  { path: 'student/details-homework', component: DetailsHomeworkComponent },
];

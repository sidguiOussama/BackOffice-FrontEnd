import { Routes } from '@angular/router';


import {ListClassRoomComponent} from '../../components-professor/classRoom/list-class-room/list-class-room.component';
import {ListDocumentComponent} from '../../components-professor/document/list-document/list-document.component';
import {DetailsDocumentComponent} from '../../components-professor/document/details-document/details-document.component';
import {ListHomeworkComponent} from '../../components-professor/homework/list-homework/list-homework.component';
import {DetailsHomeworkComponent} from '../../components-professor/homework/details-homework/details-homework.component';



export const ProfessorLayoutRoutes: Routes = [
  { path: 'list-classRoomProfessor',           component: ListClassRoomComponent },
  { path: 'professor/list-document/:id', component: ListDocumentComponent },
  { path: 'professor/details-document', component: DetailsDocumentComponent },
  { path: 'professor/list-homework/:id', component: ListHomeworkComponent },
  { path: 'professor/details-homework', component: DetailsHomeworkComponent },
];

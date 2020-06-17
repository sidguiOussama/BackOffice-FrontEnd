import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ClipboardModule} from 'ngx-clipboard';
import {ProfessorLayoutRoutes} from './professor-layout.routing';

import {ListClassRoomComponent} from '../../components-professor/classRoom/list-class-room/list-class-room.component';
import {ListDocumentComponent} from '../../components-professor/document/list-document/list-document.component';
import {DetailsDocumentComponent} from '../../components-professor/document/details-document/details-document.component';
import {ListHomeworkComponent} from '../../components-professor/homework/list-homework/list-homework.component';
import {DetailsHomeworkComponent} from '../../components-professor/homework/details-homework/details-homework.component';



@NgModule({
  declarations: [
    ListClassRoomComponent,
    ListDocumentComponent,
    DetailsDocumentComponent,
    ListHomeworkComponent,
    DetailsHomeworkComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ProfessorLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
  ]
})
export class ProfessorLayoutModule { }

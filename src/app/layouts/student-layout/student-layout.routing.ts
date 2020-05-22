import { Routes } from '@angular/router';
import {TestProfessorComponent} from '../../components-professor/test-professor/test-professor.component';
import {TestStudentComponent} from '../../components-student/test-student/test-student.component';



export const StudentLayoutRoutes: Routes = [
  { path: 'test-student',           component: TestStudentComponent },
];

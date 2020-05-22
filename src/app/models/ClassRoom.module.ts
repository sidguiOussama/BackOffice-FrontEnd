import {NgModule} from '@angular/core';
import ObjectID from 'bson-objectid';
import {School} from './School.module';
import {Level} from './Level.module';
import {Professor} from './Professor.module';



@NgModule()
export class ClassRoom {
  id: number;
  name: string;
  level: Level;
  professor: Professor;
  constructor(){}
}

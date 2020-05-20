import {NgModule} from '@angular/core';
import ObjectID from 'bson-objectid';
import {ClassRoom} from './ClassRoom.module';
import {Professor} from './Professor.module';

@NgModule()
export class Session{
  id: number;
  dateTime: Date;
  idSession: string;
  password: string;
  url: string;
  classRoom: ClassRoom;
  professor: Professor;
  constructor(){}
}

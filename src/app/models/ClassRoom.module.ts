import {NgModule} from '@angular/core';
import ObjectID from 'bson-objectid';
import {School} from './School.module';
import {logging} from 'selenium-webdriver';
import Level = logging.Level;

@NgModule()
export class ClassRoom {
  id: number;
  name: string;
  level: Level;
  constructor(){}
}

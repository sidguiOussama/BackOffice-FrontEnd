import {NgModule} from '@angular/core';
import ObjectID from 'bson-objectid';
import {School} from './School.module';
import {Homework} from './Homework.module';
import {Document} from './Document.module';
import {FeedBack} from './FeedBack.module';
import {FileType} from './enums/FileType';

@NgModule()
export class File {

  id: number;
  title: string;
  type: FileType;
  document: Document;
  feedBack: FeedBack;
  constructor(){}
}

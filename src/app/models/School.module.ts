import ObjectID from 'bson-objectid';
import {NgModule} from '@angular/core';

@NgModule()
export  class School{
  id: number ;
  address: string;
  name: string;
  phone: string;
  webSite: string;
  constructor(){}
}

import {NgModule} from '@angular/core';
import ObjectID from 'bson-objectid';
import {Account} from './Account.module';


@NgModule()
export class Professor {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  account: Account;
  constructor(){}
}

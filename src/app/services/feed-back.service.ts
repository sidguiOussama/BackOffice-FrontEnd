import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import ObjectID from 'bson-objectid';
import {FeedBack} from '../models/FeedBack.module';


@Injectable({
  providedIn: 'root'
})
export class FeedBackService {

  feedBacks: FeedBack[] = [];
  feedBackSubject = new Subject<FeedBack[]>() ;
  url = 'http://localhost:8080/feedBack';
  constructor(private  http: HttpClient) { }

  emitFeedBackSubject() {
    this.feedBackSubject.next(this.feedBacks);
  }

  createNewFeedBack(feedBack: FeedBack) {
    this.feedBacks.push(feedBack);
    this.emitFeedBackSubject();
    return this.http.post<boolean>(this.url + '/add' , feedBack ).subscribe(
      (data) => {
        this.getFeedBacks();
        console.log('create');
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }
  getFeedBacks() {
    this.http.get<FeedBack[]>(this.url + '/getAll').subscribe(
      (data) => {
        alert(data);
        this.feedBacks = data;
        this.emitFeedBackSubject();
      }, (error) => {
        console.log('Erreur : ' + error);
      }
    );
  }

  getFeedBackById(id: number) {
    const feedBack = this.feedBacks.find(
      (fd) => {
        return fd.id === id;
      }
    );
    return feedBack;
  }
  deleteFeedBack(id: number) {
    const index = this.feedBacks.indexOf(this.getFeedBackById(id));
    this.feedBacks.splice(index, 1);
    this.emitFeedBackSubject();
    this.http.delete(this.url + '/delete/' + id)
      .subscribe(
        ()  => {
          this.getFeedBacks();
          console.log('Delete ');
        },
        error  => {
          console.log('Error ', error);
        }
      );
  }

  updateFeedBack(feedBack: FeedBack) {
    this.http
      .put<any>(this.url + '/update', feedBack)
      .subscribe(
        () => {
          this.getFeedBacks();
          console.log('Update !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getFeedBackList() {
    this.getFeedBacks();
    return this.feedBacks;
  }
}

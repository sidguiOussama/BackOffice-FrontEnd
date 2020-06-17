import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClassRoomComponent } from './list-class-room.component';

describe('ListClassRoomComponent', () => {
  let component: ListClassRoomComponent;
  let fixture: ComponentFixture<ListClassRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClassRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClassRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

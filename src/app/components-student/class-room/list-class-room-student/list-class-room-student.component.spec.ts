import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClassRoomStudentComponent } from './list-class-room-student.component';

describe('ListClassRoomStudentComponent', () => {
  let component: ListClassRoomStudentComponent;
  let fixture: ComponentFixture<ListClassRoomStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClassRoomStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClassRoomStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

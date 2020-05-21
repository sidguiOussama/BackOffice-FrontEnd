import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClassRoomComponent } from './new-class-room.component';

describe('NewClassRoomComponent', () => {
  let component: NewClassRoomComponent;
  let fixture: ComponentFixture<NewClassRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewClassRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewClassRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

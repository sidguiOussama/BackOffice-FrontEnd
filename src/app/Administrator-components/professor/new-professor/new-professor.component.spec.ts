import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProfessorComponent } from './new-professor.component';

describe('NewProfessorComponent', () => {
  let component: NewProfessorComponent;
  let fixture: ComponentFixture<NewProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

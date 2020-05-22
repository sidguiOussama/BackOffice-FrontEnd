import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestProfessorComponent } from './test-professor.component';

describe('TestProfessorComponent', () => {
  let component: TestProfessorComponent;
  let fixture: ComponentFixture<TestProfessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestProfessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

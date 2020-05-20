import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProfessorsComponent } from './list-professors.component';

describe('ListProfessorsComponent', () => {
  let component: ListProfessorsComponent;
  let fixture: ComponentFixture<ListProfessorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProfessorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProfessorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

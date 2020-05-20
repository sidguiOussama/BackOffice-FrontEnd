import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAdministratorComponent } from './sidebar-administrator.component';

describe('SidebarAdministratorComponent', () => {
  let component: SidebarAdministratorComponent;
  let fixture: ComponentFixture<SidebarAdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarAdministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

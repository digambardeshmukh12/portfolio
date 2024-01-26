import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsdetailsComponent } from './projectsdetails.component';

describe('ProjectsdetailsComponent', () => {
  let component: ProjectsdetailsComponent;
  let fixture: ComponentFixture<ProjectsdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsdetailsComponent]
    });
    fixture = TestBed.createComponent(ProjectsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

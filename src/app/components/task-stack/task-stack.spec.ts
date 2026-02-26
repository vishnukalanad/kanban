import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStack } from './task-stack';

describe('TaskStack', () => {
  let component: TaskStack;
  let fixture: ComponentFixture<TaskStack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskStack]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskStack);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

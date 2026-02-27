import {Component, Inject, input, InputSignal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {TASK_SERVICE} from '../../core/tokens/TaskService';
import {TaskService} from '../../core/services/task-service';
import {ITaskService} from '../../core/interfaces/ITaskService';

@Component({
  selector: 'app-create-task',
  imports: [
    ReactiveFormsModule,
    DatePipe
  ],
  providers: [
    {
      provide: TASK_SERVICE,
      useClass: TaskService
    }
  ],
  templateUrl: './create-task.html',
  styleUrl: './create-task.css',
})
export class CreateTask {
  taskForm: FormGroup = new FormGroup({
    title: new FormControl("", {
      validators: [],
      updateOn: "blur"
    }),
    description: new FormControl("", {validators: []}),
    dueDate: new FormControl("", {
      validators: []
    }),
    priority: new FormControl("", {
      validators: []
    }),
    status: new FormControl("todo", {
      validators: []
    }),
    assignee: new FormControl([], {
      validators: []
    }),
    comments: new FormControl([], {
      validators: []
    })
  });

  constructor(@Inject(TASK_SERVICE) private taskService: ITaskService) {

  }

  ngOnInit() {
  }

  submit() {
    this.taskService.addTask(this.taskForm.value, this.taskForm.value.status);
    this.taskForm.reset();
    this.taskService.toggleCreateTask();
  }

  cancel() {
    this.taskForm.reset();
    this.taskService.toggleCreateTask();
  }
}

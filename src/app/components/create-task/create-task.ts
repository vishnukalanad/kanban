import {Component, Inject, input, InputSignal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
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
      validators: [Validators.required, Validators.minLength(3)],
      updateOn: "change"
    }),
    description: new FormControl("", {validators: [Validators.required, Validators.minLength(3),], updateOn: "change"}),
    dueDate: new FormControl("", {
      validators: [Validators.required]
    }),
    priority: new FormControl("high", {
      validators: [Validators.required]
    }),
    status: new FormControl("todo", {
      validators: [Validators.required]
    }),
    assignee: new FormControl([], {
      validators: []
    }),
    comments: new FormControl([], {
      validators: []
    }),
    id: new FormControl("", {
      validators: []
    })
  });

  constructor(@Inject(TASK_SERVICE) private taskService: ITaskService) {

  }

  ngOnInit() {
  }

  submit() {
    this.taskForm.value.id = this.generateUUID();
    console.log(this.taskForm.value);

    this.taskForm.markAllAsTouched();
    if (this.taskForm.valid) {
      this.taskService.addTask(this.taskForm.value, this.taskForm.value.status);
      this.taskForm.reset();
      this.taskService.toggleCreateTask();
    }
  }

  generateUUID(): string {
    return crypto.randomUUID();
  }

  cancel() {
    this.taskForm.reset();
    this.taskService.toggleCreateTask();
  }

  getFormError(controlName: string) {
    return this.taskForm.get(controlName)?.touched && this.taskForm.get(controlName)?.errors;
  }
}

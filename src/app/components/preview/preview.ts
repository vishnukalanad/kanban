import {Component, Inject, signal, Signal, WritableSignal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TASK_SERVICE} from '../../core/tokens/TaskService';
import {TaskService} from '../../core/services/task-service';
import {ITaskService} from '../../core/interfaces/ITaskService';
import {Task} from '../../core/interfaces/Task';
import {DatePipe, Location, NgClass, TitleCasePipe} from '@angular/common';
import {StatusColorPipe} from '../../core/pipes/status-color-pipe';
import {StatusIconPipe} from '../../core/pipes/status-icon-pipe';
import {PriorityColorPipe} from '../../core/pipes/priority-color-pipe';

@Component({
  selector: 'app-preview',
  imports: [
    DatePipe,
    StatusColorPipe,
    StatusIconPipe,
    TitleCasePipe,
    NgClass,
    PriorityColorPipe
  ],
  providers: [
    {
      provide: TASK_SERVICE,
      useClass: TaskService
    }
  ],
  templateUrl: './preview.html',
  styleUrl: './preview.css',
})
export class Preview {
  // id: string | null = null;
  task: WritableSignal<Task | null> = signal(null);

  constructor(private route: ActivatedRoute, @Inject(TASK_SERVICE) private taskService: ITaskService, private location: Location) {
  }

  ngOnInit() {
    this.fetchTask(this.route.snapshot.paramMap.get('id')!);
  }

  fetchTask(id: string) {
    this.taskService.getTask(id).subscribe({
      next: (task: Task | null) => {
        this.task.set(task);
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  goBack() {
    this.location.back();
  }

}

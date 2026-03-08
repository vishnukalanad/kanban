import {Component, Inject} from '@angular/core';
import {IconCard} from '../icon-card/icon-card';
import {Dashboard} from '../dashboard/dashboard';
import {TASK_SERVICE} from '../../core/tokens/TaskService';
import {TaskService} from '../../core/services/task-service';
import {ITaskService} from '../../core/interfaces/ITaskService';
import {ChartData} from '../../core/interfaces/IDashboard';

@Component({
  selector: 'app-task-overview',
  imports: [
    IconCard,
    Dashboard
  ],
  providers: [
    {
      provide: TASK_SERVICE,
      useClass: TaskService
    }
  ],
  templateUrl: './task-overview.html',
  styleUrl: './task-overview.css',
})
export class TaskOverview {
  cardData: ChartData = {
    total: 0,
    todo: 0,
    inProgress: 0,
    done: 0
  };
  constructor(@Inject(TASK_SERVICE) private taskService: ITaskService) {

  }

  ngOnInit() {
    this.taskService.getChartData().subscribe({
      next: data => {
        this.cardData = data;
      }
    })
  }
}

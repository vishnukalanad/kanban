import {Component, Inject} from '@angular/core';
import {Table} from '../table/table';
import {TASK_SERVICE} from '../../core/tokens/TaskService';
import {TaskService} from '../../core/services/task-service';
import {ITaskService} from '../../core/interfaces/ITaskService';
import {Task, TasksPaginated} from '../../core/interfaces/Task';

@Component({
  selector: 'app-task-list',
  imports: [
    Table,
  ],
  providers: [
    {
      provide: TASK_SERVICE,
      useClass: TaskService
    }
  ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  myColumns = [
    { key: '#', header: 'Sl.' },
    { key: 'title', header: 'Task' },
    { key: 'description', header: 'Description' },
    { key: 'dueDate', header: 'Due Date' },
    { key: 'status', header: 'Status' },
    // { key: 'priority', header: 'Priority' },
  ];
  myTableData: Task[] | [] = [];
  total: number = 0;

  constructor(@Inject(TASK_SERVICE) private taskService: ITaskService) {

  }

  ngOnInit() {
    this.getTableData(1,10);
  }

  getTableData(page: number, pageSize: number): void {
    this.taskService.getPaginatedTasks(page, pageSize).subscribe({
      next: (res: TasksPaginated) => {
        this.myTableData = res.tasks;
        this.total = res.total;
      }
    })
  }

  pageChange(e: any): void {
    this.getTableData(e.page, e.pageSize);
  }
}

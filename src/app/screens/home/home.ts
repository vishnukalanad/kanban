import {Component, Inject} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {tasksTabMenu} from '../../core/navigation/menu';
import {CreateTask} from '../../components/create-task/create-task';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {getModalState} from '../../core/store/selectors';
import {AsyncPipe} from '@angular/common';
import {TASK_SERVICE} from '../../core/tokens/TaskService';
import {TaskService} from '../../core/services/task-service';
import {ITaskService} from '../../core/interfaces/ITaskService';

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CreateTask,
    AsyncPipe
  ],
  providers: [{
    provide: TASK_SERVICE,
    useClass: TaskService
  }],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  menuItems: any[] = tasksTabMenu;

  $modalState: Observable<boolean>;
  constructor(private store: Store, @Inject(TASK_SERVICE) private taskService: ITaskService) {
    this.$modalState = store.select(getModalState);
  }

  ngOnInit() {}

  createTask() {
    this.taskService.toggleCreateTask();
  }
}

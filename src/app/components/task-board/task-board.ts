import {Component, Inject, Signal} from '@angular/core';
import {TaskStack} from '../task-stack/task-stack';
import {Store} from '@ngrx/store';
import {TASK_SERVICE} from '../../core/tokens/TaskService';
import {ITaskService} from '../../core/interfaces/ITaskService';
import {getDoneTasks, getInProgressTasks, getTodoTasks} from '../../core/store/selectors';
import {toSignal} from '@angular/core/rxjs-interop';
import {Observable} from 'rxjs';
import {Task} from '../../core/interfaces/Task';
import {MOCK_TASKS} from '../../core/mocks/Tasks';
import {setDoneTasks, setInProgressTasks, setTodoTasks} from '../../core/store/actions';
import {TaskService} from '../../core/services/task-service';

@Component({
  selector: 'app-task-board',
  imports: [
    TaskStack
  ],
  providers: [
    {
      provide: TASK_SERVICE,
      useClass: TaskService
    }
  ],
  templateUrl: './task-board.html',
  styleUrl: './task-board.css',
})
export class TaskBoard {
  $todoTasksSelector: Observable<Task[]>;
  $inProgressTasksSelector: Observable<Task[]>;
  $doneTasksSelector: Observable<Task[]>;

  todoTasks: Signal<Task[]>;
  inProgressTasks: Signal<Task[]>;
  doneTasks: Signal<Task[]>;

  constructor(private store: Store, @Inject(TASK_SERVICE) private taskService: ITaskService) {
    this.$todoTasksSelector = store.select(getTodoTasks);
    this.$inProgressTasksSelector = store.select(getInProgressTasks);
    this.$doneTasksSelector = store.select(getDoneTasks);

    this.todoTasks = toSignal(this.$todoTasksSelector, {
      initialValue: []
    });
    this.inProgressTasks = toSignal(this.$inProgressTasksSelector, {
      initialValue: []
    });
    this.doneTasks = toSignal(this.$doneTasksSelector, {
      initialValue: []
    });
  }

  ngOnInit() {
    // this.initializeTasks();
  }

  /**
   *
   */
  initializeTasks() {
    let todoTasks: Task[] = [];
    let inProgressTasks: Task[] = [];
    let doneTasks: Task[] = [];

    for (let task of MOCK_TASKS) {
      switch (task.status.toLowerCase()) {
        case "todo":
          todoTasks.push(task);
          break;
        case "in-progress":
          inProgressTasks.push(task);
          break;
        case "done":
          doneTasks.push(task);
          break;
        default:
          break;

      }
    }

    this.store.dispatch(setTodoTasks({tasks: todoTasks}))
    this.store.dispatch(setInProgressTasks({tasks: inProgressTasks}))
    this.store.dispatch(setDoneTasks({tasks: doneTasks}))
  }
}

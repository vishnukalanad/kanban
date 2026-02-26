import {Component, Inject, Signal, signal} from '@angular/core';
import {TaskStack} from '../../components/task-stack/task-stack';
import {MOCK_TASKS} from '../../core/mocks/Tasks';
import {Store} from '@ngrx/store';
import {setDoneTasks, setInProgressTasks, setTodoTasks} from '../../core/store/actions';
import {Task} from '../../core/interfaces/Task';
import {getDoneTasks, getInProgressTasks, getTodoTasks} from '../../core/store/selectors';
import {toSignal} from '@angular/core/rxjs-interop';
import {Observable} from 'rxjs';
import {ITaskService} from '../../core/interfaces/ITaskService';
import {TASK_SERVICE} from '../../core/tokens/TaskService';
import {TaskService} from '../../core/services/task-service';

@Component({
  selector: 'app-home',
  imports: [
    TaskStack
  ],
  providers: [
    {
      provide: TASK_SERVICE,
      useClass: TaskService
    }
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
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
    this.initializeTasks();
  }

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

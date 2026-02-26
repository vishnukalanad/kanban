import {Injectable} from '@angular/core';
import {ITaskService} from '../interfaces/ITaskService';
import {Task} from '../interfaces/Task';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {getDoneTasks, getInProgressTasks, getTasks, getTodoTasks} from '../store/selectors';
import {toSignal} from '@angular/core/rxjs-interop';
import {
  addToDoneList,
  addToInProgressList,
  addToTodoList,
  deleteDoneTask,
  deleteInProgressTask,
  deleteTodoTask, reorderTasks,
  setDoneTasks,
  setInProgressTasks,
  setTodoTasks
} from '../store/actions';
import {TaskTypes} from '../types/Tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService implements ITaskService {
  $tasks: Observable<Task[]>;

  constructor(private store: Store) {
    this.$tasks = store.select(getTasks);
  }

  getTasks(): { todo: Task[], inProgress: Task[], done: Task[] } | [] {
    const todoTasks = this.store.select(getTodoTasks);
    const inProgressTasks = this.store.select(getInProgressTasks);
    const doneTasks = this.store.select(getDoneTasks);
    return {
      todo: toSignal(todoTasks)()!,
      inProgress: toSignal(inProgressTasks)()!,
      done: toSignal(doneTasks)()!
    };
  }

  addTask(task: Task, type: TaskTypes) {
    switch (type) {
      case "todo":
        this.store.dispatch(addToTodoList({task: task}))
        break;
      case "in-progress":
        console.log('to in progress');
        this.store.dispatch(addToInProgressList({task: task}))
        break;
      case "done":
        this.store.dispatch(addToDoneList({task: task}))
        break;
      default:
        break;
    }
  }

  setTasks(task: Task[]): any {
  }

  deleteTask(taskId: string, type: TaskTypes): void {
    switch (type) {
      case "todo":
        this.store.dispatch(deleteTodoTask({id: taskId}))
        break;
      case "in-progress":
        this.store.dispatch(deleteInProgressTask({id: taskId}))
        break;
      case "done":
        this.store.dispatch(deleteDoneTask({id: taskId}))
        break;
      default:
        break;
    }
  }

  reorderTasks(column: TaskTypes, prevIndex: number, nextIndex: number) {
    this.store.dispatch(reorderTasks({ column, prevIndex, nextIndex}))
  }
}

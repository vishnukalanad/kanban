import {Task} from './Task';
import {Observable} from 'rxjs';
import {TaskTypes} from '../types/Tasks';

export interface ITaskService {
  getTasks(type: "todo" | "in-progress" | "done"): any;
  setTasks(task: Task[]): Observable<Task[]>;
  addTask(task: Task, type: TaskTypes): void;
  deleteTask(taskId: string, type: TaskTypes): void;
  reorderTasks(column: TaskTypes, prevIndex: number, nextIndex: number): void;
  toggleCreateTask(): void;
}

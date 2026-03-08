import {Injectable} from '@angular/core';
import {ITaskService} from '../interfaces/ITaskService';
import {Task, TasksPaginated} from '../interfaces/Task';
import {select, Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {getDoneTasks, getInProgressTasks, getTasks, getTodoTasks} from '../store/selectors';
import {toSignal} from '@angular/core/rxjs-interop';
import {
  addToDoneList,
  addToInProgressList,
  addToTodoList,
  deleteDoneTask,
  deleteInProgressTask,
  deleteTodoTask, modalToggle, reorderTasks,
  setDoneTasks,
  setInProgressTasks,
  setTodoTasks
} from '../store/actions';
import {TaskTypes} from '../types/Tasks';
import {ChartData} from '../interfaces/IDashboard';

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

  public getFromStorage(): Task[] {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      return JSON.parse(tasks);
    } else {
      return [];
    }
  }

  private saveToStorage(tasks: Task[]) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  addTask(task: Task, type: TaskTypes) {
    let tasks = this.getFromStorage();
    const t = tasks.find(t => t.id === task.id);
    tasks = tasks.filter(t => t.id !== task.id);

    switch (type) {
      case "todo":
        this.store.dispatch(addToTodoList({task: task}))
        if (t) {
          t.status = type;
        }
        break;
      case "in-progress":
        this.store.dispatch(addToInProgressList({task: task}))
        if (t) {
          t.status = type;
        }
        break;
      case "done":
        this.store.dispatch(addToDoneList({task: task}))
        if (t) {
          t.status = type;
        }
        break;
      default:
        break;
    }

    tasks.push(t ?? task);
    this.saveToStorage(tasks);
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

  manualDelete(taskId: string): void {
    const task: Task = this.getFromStorage().find(t => t.id === taskId)!;
    this.saveToStorage(this.getFromStorage().filter(t => t.id !== taskId));
    this.deleteTask(taskId, task.status)
  }

  reorderTasks(column: TaskTypes, prevIndex: number, nextIndex: number) {
    this.store.dispatch(reorderTasks({column, prevIndex, nextIndex}))
  }

  toggleCreateTask() {
    this.store.dispatch(modalToggle());
  }

  initializeTasks(): void {
    let todoTasks: Task[] = [];
    let inProgressTasks: Task[] = [];
    let doneTasks: Task[] = [];

    const tasks: Task[] = this.getFromStorage();

    for (let task of tasks) {
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

  getTask(taskId: string): Observable<Task | null> {
    const task = this.getFromStorage().find(t => t.id === taskId);
    return of(task ?? null);
  }

  getPaginatedTasks(page: number, pageSize: number): Observable<TasksPaginated> {

    const tasks = this.getFromStorage();
    const total = tasks.length;

    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    const paginatedTasks: Task[] = tasks.slice(start, end);

    return of({
      tasks: paginatedTasks,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize)
    });
  }

  getChartData(): Observable<ChartData> {

    const tasks: Task[] = this.getFromStorage();

    const chartData: ChartData = {
      total: tasks.length,
      todo: 0,
      inProgress: 0,
      done: 0
    };

    for (const task of tasks) {

      switch (task.status) {

        case "todo":
          chartData.todo++;
          break;

        case "in-progress":
          chartData.inProgress++;
          break;

        case "done":
          chartData.done++;
          break;

      }

    }

    return of(chartData);
  }
}

import {Component, Inject, input, InputSignal, Signal} from '@angular/core';
import {Task} from '../../core/interfaces/Task';
import {DatePipe, NgClass, UpperCasePipe} from '@angular/common';
import {StatusColorPipe} from '../../core/pipes/status-color-pipe';
import {CdkDrag, CdkDragPlaceholder, CdkDropList} from '@angular/cdk/drag-drop';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {getDoneTasks, getInProgressTasks, getTodoTasks, tasksSelector} from '../../core/store/selectors';
import {toSignal} from '@angular/core/rxjs-interop';
import {TASK_SERVICE} from '../../core/tokens/TaskService';
import {ITaskService} from '../../core/interfaces/ITaskService';

@Component({
  selector: 'app-task-stack',
  imports: [
    UpperCasePipe,
    NgClass,
    StatusColorPipe,
    DatePipe,
    CdkDrag,
    CdkDropList,
    CdkDragPlaceholder
  ],
  templateUrl: './task-stack.html',
  styleUrl: './task-stack.css',
})
export class TaskStack {
  tasks: InputSignal<Task[]> = input.required<Task[]>();
  // title: InputSignal<string> = input.required<string>();

  connectedTo: string[] = ["todo", "done", "in-progress"];

  title: string = "...";
  primaryColor: string = "";
  type: InputSignal<"todo" | "done" | "in-progress"> = input.required<"todo" | "done" | "in-progress">();
  $tasks: Observable<any>;

  todoTasks: Signal<Task[]>;
  inProgressTasks: Signal<Task[]>;
  doneTasks: Signal<Task[]>;

  draggingId: string | null = "";
  dragging: boolean = false;

  constructor(private store: Store, @Inject(TASK_SERVICE) private taskService: ITaskService) {
    this.$tasks = store.select(tasksSelector);

    this.todoTasks = toSignal(store.select(getTodoTasks), {
      initialValue: []
    });
    this.inProgressTasks = toSignal(store.select(getInProgressTasks), {
      initialValue: []
    });
    this.doneTasks = toSignal(store.select(getDoneTasks), {
      initialValue: []
    });
  }

  ngOnInit() {
    this.setTitle();
  }

  setTitle() {
    switch (this.type()) {
      case "todo":
        this.title = "To Do";
        this.primaryColor = "bg-yellow-400";
        break;
      case "done":
        this.title = "Done";
        this.primaryColor = "bg-green-500";
        break;
      case "in-progress":
        this.title = "In Progress";
        this.primaryColor = "bg-blue-500";
        break;
      default:
        break
    }
  }

  drop(e: any) {
    console.log(e);

    const newIndex = e.currentIndex;
    const previousIndex = e.previousIndex;

    const targetId = e.container.id;
    const currentId = e.previousContainer.id;
    let selectedTask: Task = e.item.data;

    const itemId = e.item.element.nativeElement.id;

    console.log(targetId, currentId, itemId, selectedTask);

    selectedTask = {
      ...selectedTask,
      status: targetId
    }

    if (currentId !== targetId) {
      this.taskService.addTask(selectedTask, targetId);
      this.taskService.deleteTask(itemId, currentId);
    } else {
      this.taskService.reorderTasks(targetId, previousIndex, newIndex);
    }
  }
}

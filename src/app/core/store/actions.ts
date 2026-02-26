import {createAction, props} from '@ngrx/store';
import {Task} from '../interfaces/Task';
import {TaskTypes} from '../types/Tasks';

export const setTasks = createAction("[Tasks] Set Tasks", props<{tasks: Task[] | []}>());
export const addTask = createAction("[Tasks] Add Task", props<{task: Task}>());

export const setTodoTasks = createAction("[Tasks] set todo tasks", props<{tasks: Task[] | []}>());
export const setInProgressTasks = createAction("[Tasks] set in progress tasks", props<{tasks: Task[] | []}>());
export const setDoneTasks = createAction("[Tasks] set done tasks", props<{tasks: Task[] | []}>())

export const deleteTodoTask = createAction("[Tasks] delete todo task", props<{id: string}>())
export const deleteInProgressTask = createAction("[Tasks] delete in progress task", props<{id: string}>())
export const deleteDoneTask = createAction("[Tasks] delete done task", props<{id: string}>())

export const addToTodoList = createAction("[Tasks] add to todo", props<{task: Task}>());
export const addToInProgressList = createAction("[Tasks] add to in progress", props<{task: Task}>());
export const addToDoneList = createAction("[Tasks] add to done", props<{task: Task}>());

export const reorderTasks = createAction("[Tasks] reorder tasks", props<{column: TaskTypes, prevIndex: number, nextIndex: number}>());

import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from '../interfaces/State';


export const tasksSelector = createFeatureSelector<State>('tasks');

export const getTasks = createSelector(tasksSelector, (state) => state.tasks)
export const getTodoTasks = createSelector(tasksSelector, (state) => state.todo);
export const getInProgressTasks = createSelector(tasksSelector, (state) => state.inProgress);
export const getDoneTasks = createSelector(tasksSelector, (state) => state.done);

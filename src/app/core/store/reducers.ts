import {State} from '../interfaces/State';
import {createReducer, on} from '@ngrx/store';
import {
  addTask, addToDoneList, addToInProgressList, addToTodoList, deleteDoneTask,
  deleteInProgressTask,
  deleteTodoTask,
  setDoneTasks,
  setInProgressTasks,
  setTasks,
  setTodoTasks
} from './actions';

const initialState: State = {
  tasks: [],
  todo: [],
  inProgress: [],
  done: [],
}

export const taskReducer = createReducer(
  initialState,
  on(setTasks, (state, {tasks}) => ({
      ...state,
      tasks: [...tasks]
    })
  ),
  on(setTodoTasks, (state, {tasks}) => ({
      ...state,
      todo: [...tasks]
    })
  ),
  on(setInProgressTasks, (state, {tasks}) => ({
      ...state,
      inProgress: [...tasks]
    })
  ),
  on(setDoneTasks, (state, {tasks}) => ({
      ...state,
      done: [...tasks]
    })
  ),
  on(addTask, (state, {task}) => ({
    ...state,
    tasks: [...state.tasks, task]
  })),
  on(deleteTodoTask, (state, {id}) => ({
    ...state,
    todo: [...state.todo.filter(task => task.id !== id)]
  })),
  on(deleteInProgressTask, (state, {id}) => ({
    ...state,
    inProgress: [...state.inProgress.filter(task => task.id !== id)]
  })),
  on(deleteDoneTask, (state, {id}) => ({
    ...state,
    done: [...state.done.filter(task => task.id !== id)]
  })),

  on(addToTodoList, (state, {task}) => ({
    ...state,
    todo: [...state.todo, task]
  })),
  on(addToInProgressList, (state, {task}) => ({
    ...state,
    inProgress: [...state.inProgress, task]
  })),
  on(addToDoneList, (state, {task}) => ({
    ...state,
    done: [...state.done, task]
  }))
);

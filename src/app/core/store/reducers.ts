import {State} from '../interfaces/State';
import {createReducer, on} from '@ngrx/store';
import {
  addTask, addToDoneList, addToInProgressList, addToTodoList, deleteDoneTask,
  deleteInProgressTask,
  deleteTodoTask, modalToggle, reorderTasks,
  setDoneTasks,
  setInProgressTasks,
  setTasks,
  setTodoTasks
} from './actions';

const initialState: State = {
  tasks: [],
  todo: [],
  "in-progress": [],
  done: [],
  modal: false
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
    ["in-progress"]: [...tasks]
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
    ["in-progress"]: [...state["in-progress"].filter(task => task.id !== id)]
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
    ["in-progress"]: [...state["in-progress"], task]
  })),
  on(addToDoneList, (state, {task}) => ({
    ...state,
    done: [...state.done, task]
  })),
  on(reorderTasks, (state, {column, prevIndex, nextIndex}) => ({
    ...state,
    [column]: moveItem(state[column], prevIndex, nextIndex)
  })),
  on(modalToggle, (state) => ({
    ...state,
    modal: !state.modal
  })),
);

function moveItem<T>(array: T[], fromIndex: number, toIndex: number): T[] {
  const cloned = [...array];
  const [item] = cloned.splice(fromIndex, 1);
  cloned.splice(toIndex, 0, item);
  return cloned;
}

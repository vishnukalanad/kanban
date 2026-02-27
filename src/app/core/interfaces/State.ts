import {Task} from './Task';

export interface State {
  tasks: Task[];
  todo: Task[];
  "in-progress": Task[];
  done: Task[];
  modal: boolean;
}

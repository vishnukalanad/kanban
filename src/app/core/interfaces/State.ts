import {Task} from './Task';

export interface State {
  tasks: Task[];
  todo: Task[];
  inProgress: Task[];
  done: Task[];
}

import {TaskTypes} from '../types/Tasks';

export interface Task {
  title: string;
  description: string;
  priority: string;
  status: TaskTypes;
  dueDate: Date;
  id: string;
  createdAt: Date;
  assignees: string[];
  comments: Comment[];
}

export interface Comment {
  text: string;
  postedBy: string;
  date: Date;
}

export interface TasksPaginated {
  tasks: Task[],
  total: number,
  page: number,
  pageSize: number,
  totalPages: number
}

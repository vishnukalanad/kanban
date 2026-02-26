export interface Task {
  title: string;
  description: string;
  priority: string;
  status: string;
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

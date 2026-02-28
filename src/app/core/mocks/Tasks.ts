import {Task} from '../interfaces/Task';

export const MOCK_TASKS: Task[] = [
  {
    id: "xx01",
    title: 'Implement Drag & Drop',
    description: 'Enable drag and drop functionality between Kanban columns.',
    priority: 'high',
    status: 'in-progress',
    dueDate: new Date('2026-03-05'),
    createdAt: new Date('2026-02-25'),
    assignees: ['Vishnu', 'Arjun'],
    comments: [
      {
        text: 'Basic layout completed, working on event bindings.',
        postedBy: 'Vishnu',
        date: new Date('2026-02-26')
      }
    ]
  },
  {
    id: "xx02",
    title: 'Fix Authentication Bug',
    description: 'Resolve token refresh issue causing unexpected logout.',
    priority: 'high',
    status: 'todo',
    dueDate: new Date('2026-03-02'),
    createdAt: new Date('2026-02-24'),
    assignees: ['Rahul'],
    comments: []
  },
  {
    id: "xx03",
    title: 'Design Dashboard UI',
    description: 'Create reusable smart and dumb components for dashboard widgets.',
    priority: 'medium',
    status: 'in-progress',
    dueDate: new Date('2026-03-10'),
    createdAt: new Date('2026-02-20'),
    assignees: ['Meera', 'Vishnu'],
    comments: [
      {
        text: 'Wireframes approved.',
        postedBy: 'Meera',
        date: new Date('2026-02-22')
      },
      {
        text: 'Refactoring to improve reusability.',
        postedBy: 'Vishnu',
        date: new Date('2026-02-26')
      }
    ]
  },
  {
    id: "xx04",
    title: 'Optimize API Performance',
    description: 'Reduce response time for reports endpoint.',
    priority: 'medium',
    status: 'todo',
    dueDate: new Date('2026-03-15'),
    createdAt: new Date('2026-02-18'),
    assignees: ['Arjun'],
    comments: []
  },
  {
    id: "xx05",
    title: 'Write Unit Tests',
    description: 'Increase test coverage to at least 85% for task module.',
    priority: 'low',
    status: 'done',
    dueDate: new Date('2026-02-28'),
    createdAt: new Date('2026-02-15'),
    assignees: ['Vishnu'],
    comments: [
      {
        text: 'All critical paths covered.',
        postedBy: 'Vishnu',
        date: new Date('2026-02-27')
      }
    ]
  }
];

import { Task } from '../interfaces/Task';

export const MOCK_TASKS: Task[] = [
  {
    id: 'T-001',
    title: 'Prepare monthly financial report',
    description: 'Compile revenue, expenses, and profit analysis for the monthly board review.',
    priority: 'High',
    status: 'in-progress',
    dueDate: new Date('2026-03-05'),
    createdAt: new Date('2026-02-20'),
    assignees: ['Arun', 'Meera'],
    comments: [
      {
        text: 'Waiting for final numbers from accounting.',
        postedBy: 'Arun',
        date: new Date('2026-02-22')
      }
    ]
  },
  {
    id: 'T-002',
    title: 'Fix login page validation bug',
    description: 'Resolve issue where error message does not appear for invalid email format.',
    priority: 'Medium',
    status: 'todo',
    dueDate: new Date('2026-03-02'),
    createdAt: new Date('2026-02-18'),
    assignees: ['Sneha'],
    comments: []
  },
  {
    id: 'T-003',
    title: 'Update Angular dependencies',
    description: 'Upgrade project to latest Angular version and resolve breaking changes.',
    priority: 'High',
    status: 'todo',
    dueDate: new Date('2026-03-10'),
    createdAt: new Date('2026-02-15'),
    assignees: ['Rahul', 'Vishnu'],
    comments: [
      {
        text: 'Check NgRx compatibility before upgrading.',
        postedBy: 'Meera',
        date: new Date('2026-02-16')
      }
    ]
  },
  {
    id: 'T-004',
    title: 'Design dashboard layout',
    description: 'Create wireframes for the new admin dashboard with responsive layout.',
    priority: 'Low',
    status: 'done',
    dueDate: new Date('2026-02-25'),
    createdAt: new Date('2026-02-10'),
    assignees: ['Rahul'],
    comments: [
      {
        text: 'Final layout approved.',
        postedBy: 'Rahul',
        date: new Date('2026-02-24')
      }
    ]
  },
  {
    id: 'T-005',
    title: 'Implement NgRx task slice',
    description: 'Create actions, reducer, effects, and selectors for task management.',
    priority: 'High',
    status: 'in-progress',
    dueDate: new Date('2026-03-01'),
    createdAt: new Date('2026-02-19'),
    assignees: ['Vishnu'],
    comments: []
  },
  {
    id: 'T-006',
    title: 'Add unit tests for reducers',
    description: 'Write unit tests covering add, update, and delete task reducer cases.',
    priority: 'Medium',
    status: 'todo',
    dueDate: new Date('2026-03-08'),
    createdAt: new Date('2026-02-21'),
    assignees: ['Sneha', 'Arun'],
    comments: []
  },
  {
    id: 'T-007',
    title: 'Refactor shared components',
    description: 'Extract reusable card and modal components into shared module.',
    priority: 'Low',
    status: 'in-progress',
    dueDate: new Date('2026-03-12'),
    createdAt: new Date('2026-02-14'),
    assignees: ['Meera'],
    comments: [
      {
        text: 'Ensure components use OnPush strategy.',
        postedBy: 'Sneha',
        date: new Date('2026-02-17')
      }
    ]
  },
  {
    id: 'T-008',
    title: 'Optimize change detection performance',
    description: 'Investigate unnecessary re-renders and apply OnPush where needed.',
    priority: 'High',
    status: 'todo',
    dueDate: new Date('2026-03-06'),
    createdAt: new Date('2026-02-23'),
    assignees: ['Vishnu', 'Rahul'],
    comments: []
  },
  {
    id: 'T-009',
    title: 'Create task filter feature',
    description: 'Allow filtering tasks by priority, status, and due date range.',
    priority: 'Medium',
    status: 'done',
    dueDate: new Date('2026-02-28'),
    createdAt: new Date('2026-02-12'),
    assignees: ['Arun'],
    comments: []
  },
  {
    id: 'T-010',
    title: 'Deploy staging build',
    description: 'Prepare and deploy the staging version for QA review.',
    priority: 'High',
    status: 'todo',
    dueDate: new Date('2026-03-15'),
    createdAt: new Date('2026-02-26'),
    assignees: ['Vishnu', 'Sneha'],
    comments: [
      {
        text: 'Waiting for QA sign-off checklist.',
        postedBy: 'Vishnu',
        date: new Date('2026-02-26')
      }
    ]
  }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./screens/home/home').then(m => m.Home),
    children: [
      {
        path: '',
        loadComponent: () => import('./components/task-overview/task-overview').then(m => m.TaskOverview)
      },
      {
        path: 'board',
        loadComponent: () => import('./screens/board/board').then(m => m.Board),
        children: [
          {
            path: "",
            loadComponent: () => import('./components/task-board/task-board').then(m => m.TaskBoard),
          },
          {
            path: 'preview/:id',
            loadComponent: () => import('./components/preview/preview').then(m => m.Preview),
          }
        ]
      },
      {
        path: "list",
        loadComponent: () => import("./components/task-list/task-list").then(m => m.TaskList)
      },
      {
        path: "calendar",
        loadComponent: () => import("./components/task-calendar/task-calendar").then(m => m.TaskCalendar)
      }
    ]
  }
];

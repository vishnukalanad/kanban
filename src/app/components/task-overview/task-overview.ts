import { Component } from '@angular/core';
import {IconCard} from '../icon-card/icon-card';

@Component({
  selector: 'app-task-overview',
  imports: [
    IconCard
  ],
  templateUrl: './task-overview.html',
  styleUrl: './task-overview.css',
})
export class TaskOverview {
  cardsData: any[] = [
    {
      id: "1",
      title: "Completed tasks",
      icon: "bi bi-check-circle",
      color: "bg-yellow-400",
      count: 10,
      description: "in the past 7 days"

    },
    {
      id: "2",
      title: "Updated",
      icon: "bi bi-pencil",
      color: "bg-blue-400",
      count: 5,
      description: "in the past 7 days"
    },
    {
      id: "3",
      title: "Created",
      icon: "bi bi-plus-circle",
      color: "bg-green-400",
      count: 6,
      description: "in the past 7 days"

    },
    {
      id: "4",
      title: "Due",
      icon: "bi bi-calendar-date",
      color: "bg-orange-400",
      count: 2,
      description: "in the past 7 days"

    },
  ]
}

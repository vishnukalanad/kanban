import {Component, input, InputSignal, signal} from '@angular/core';
import Chart from 'chart.js/auto';
import {ChartData} from '../../core/interfaces/IDashboard';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  stats: InputSignal<ChartData> = input<ChartData>({
    total: 0,
    todo: 0,
    inProgress: 0,
    done: 0
  });

  ngAfterViewInit() {
    this.createStatusChart();
    this.createPriorityChart();
  }


  createStatusChart() {
    new Chart("statusChart", {
      type: 'doughnut',
      data: {
        labels: ['Todo', 'In Progress', 'Done'],
        datasets: [{
          data: [8, 10, 6],
          backgroundColor: [
            '#3b82f6',
            '#f59e0b',
            '#10b981'
          ]
        }]
      },
      options: {
        plugins: {
          legend: {position: 'bottom'}
        }
      }
    });
  }


  createPriorityChart() {
    new Chart("priorityChart", {
      type: 'bar',
      data: {
        labels: ['Low', 'Medium', 'High'],
        datasets: [{
          label: 'Tasks',
          data: [6, 10, 8],
          backgroundColor: [
            '#94a3b8',
            '#f59e0b',
            '#ef4444'
          ]
        }]
      },
      options: {
        plugins: {
          legend: {display: false}
        }
      }
    });
  }
}

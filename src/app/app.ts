import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Layout} from './components/layout/layout';
import { Analytics } from "@vercel/analytics/next"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('task-manager');
}

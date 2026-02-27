import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {tasksTabMenu} from '../../core/navigation/menu';

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  menuItems: any[] = tasksTabMenu;
  constructor() {

  }
}

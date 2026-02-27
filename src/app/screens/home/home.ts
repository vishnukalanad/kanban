import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {tasksTabMenu} from '../../core/navigation/menu';
import {CreateTask} from '../../components/create-task/create-task';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {getModalState} from '../../core/store/selectors';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CreateTask,
    AsyncPipe
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  menuItems: any[] = tasksTabMenu;

  $modalState: Observable<boolean>;
  constructor(private store: Store) {
    this.$modalState = store.select(getModalState);
  }

  ngOnInit() {}
}

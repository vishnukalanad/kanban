import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Nav} from '../nav/nav';
import {ToastService} from '../../core/services/toast';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    Nav
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {


}

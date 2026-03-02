import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {ToastService} from '../../core/services/toast';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  @ViewChild('toastContainer', {read: ViewContainerRef}) toastContainer!: ViewContainerRef;

  constructor(private toastService: ToastService) {
  }

  ngAfterViewInit() {
    this.toastService.registerContainer(this.toastContainer);
  }
}

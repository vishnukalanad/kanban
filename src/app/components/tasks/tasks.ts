import {Component, ElementRef, HostListener, input, InputSignal, ViewChild} from '@angular/core';
import {DatePipe, NgClass, TitleCasePipe} from '@angular/common';
import {StatusColorPipe} from '../../core/pipes/status-color-pipe';
import {Task} from '../../core/interfaces/Task';
import {PriorityColorPipe} from '../../core/pipes/priority-color-pipe';
import {StatusIconPipe} from '../../core/pipes/status-icon-pipe';

@Component({
  selector: 'app-tasks',
  imports: [
    DatePipe,
    StatusColorPipe,
    TitleCasePipe,
    NgClass,
    PriorityColorPipe,
    StatusIconPipe
  ],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  task: InputSignal<Task> = input.required<Task>();
  @ViewChild("toggleOptionsContainer") toggleOptionsContainer!: ElementRef;
  toggleTaskOptions: Map<string, boolean> = new Map();

  constructor() {
  }

  ngOnInit() {
    // console.log(this.task());
  }

  /**
   * Toggles the task options visibility state for a given task ID.
   *
   * @param {string} id - The unique identifier of the task whose options visibility is to be toggled.
   * @param {MouseEvent} e - The mouse event that triggered this handler.
   * @return {void}
   */
  toggleTaskOptionsHandler(id: string, e: MouseEvent): void {
    // this.toggleTaskOptions.clear();
    this.toggleTaskOptions.set(id, !this.toggleTaskOptions.get(id));
  }

  /**
   * Handles the click event on the document to determine if the click occurred outside of a specific container.
   * If the click is outside the container, it performs a specific action, such as clearing options.
   *
   * @param {MouseEvent} event - The mouse event triggered by clicking on the document.
   * @return {void} This method does not return a value.
   */
  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent): void {
    try {
      const clickInside = this.toggleOptionsContainer.nativeElement.contains(event.target);
      if (!clickInside) {
        this.toggleTaskOptions.clear();
        return;
      }
    } catch (e) {
      // ignoring the undefined error from click event; cause known, kept for debugging later;
      // console.log(e);
    }
  }
}

import {Pipe, PipeTransform} from '@angular/core';
import {TaskTypes} from '../types/Tasks';

@Pipe({
  name: 'statusIcon'
})
export class StatusIconPipe implements PipeTransform {

  transform(value: TaskTypes, ...args: unknown[]): string {
    switch (value) {
      case "todo":
        return "bi bi-three-dots";
      case "in-progress":
        return "bi bi-hourglass-split";
      case "done":
        return "bi bi-check-circle-fill";
      default:
        return "bi bi-question-circle";
    }
  }

}

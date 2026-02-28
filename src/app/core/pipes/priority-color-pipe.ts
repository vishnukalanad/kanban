import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'priorityColor'
})
export class PriorityColorPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string[] {
    switch (value.toLowerCase()) {
      case "low":
        return ["text-green-800", "bg-green-100"];
      case "medium":
        return ["text-yellow-800", "bg-yellow-100"];
      case "high":
        return ["text-red-800", "bg-red-100"];
      default:
        return ["text-slate-800", "bg-slate-100"];
    }
  }

}

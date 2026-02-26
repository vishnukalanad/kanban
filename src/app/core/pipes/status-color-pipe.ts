import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusColor'
})
export class StatusColorPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string[] {
    switch (value.toLowerCase()) {
      case "todo":
        return ["text-yellow-800", "bg-yellow-100"];
      case "in-progress":
        return ["text-blue-800", "bg-blue-100"];
      case "done":
        return ["text-green-800", "bg-green-100"];
      default:
        return ["text-slate-800", "bg-slate-100"];
    }
  }

}

import {Component, input, InputSignal} from '@angular/core';
import {NgClass, TitleCasePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [
    NgClass,
    UpperCasePipe,
    TitleCasePipe
  ],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
})
export class Toast {

  title: InputSignal<string> = input.required<string>();
  message: InputSignal<string> = input.required<string>();
  type: InputSignal<"success" | "failure"> = input.required<"success" | "failure">();
}

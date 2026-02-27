import {Component, input, InputSignal} from '@angular/core';

@Component({
  selector: 'app-icon-card',
  imports: [],
  templateUrl: './icon-card.html',
  styleUrl: './icon-card.css',
})
export class IconCard {
  icon: InputSignal<string> = input.required<string>();
  color: InputSignal<string> = input.required<string>();
  title: InputSignal<string> = input.required<string>();
  description: InputSignal<string> = input.required<string>();
  count: InputSignal<number> = input.required<number>();
}

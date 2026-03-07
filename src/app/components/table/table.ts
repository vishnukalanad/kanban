import {Component, computed, input, InputSignal, output, signal} from '@angular/core';
import {PriorityColorPipe} from '../../core/pipes/priority-color-pipe';
import {DatePipe, NgClass, TitleCasePipe} from '@angular/common';
import {StatusColorPipe} from '../../core/pipes/status-color-pipe';

export interface TableColumn {
  key: string;       // The property name in your data objects
  header: string;    // The display name for the column header
}

@Component({
  selector: 'app-table',
  imports: [
    TitleCasePipe,
    NgClass,
    StatusColorPipe,
    DatePipe
  ],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  data: InputSignal<any[]> = input.required<any[]>();
  columns: InputSignal<TableColumn[]> = input.required<TableColumn[]>();

  page = signal(1);
  pageSize = input<number>(10);
  totalElements = input<number>(0);

  totalPages = computed(() => {
    return Math.ceil(this.totalElements() / this.pageSize())
  })

  emptyMessage: InputSignal<string | null | undefined> = input<string | null | undefined>();

  pageChange = output<{ page: number; pageSize: number }>();

  ngOnInit(): void {

  }
  nextPage() {
    console.log(this.page(), this.totalPages())
    if (this.page() >= this.totalPages()) return;
    this.page.update(p => p + 1);
    this.emitPage();
  }


  previousPage() {
    if (this.page() === 1) return;
    this.page.update(p => p - 1);
    this.emitPage();
  }

  private emitPage() {
    this.pageChange.emit({
      page: this.page(),
      pageSize: this.pageSize()
    });
  }

  generateId(): string {
    return Math.random().toString(36).substring(2, 10);
  }
}

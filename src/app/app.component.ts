import { ChangeDetectionStrategy, Component, EventEmitter } from '@angular/core';
import { interval, Observable, from, zip, concat } from 'rxjs';
import { map, startWith, takeUntil, repeatWhen, buffer, switchMap, first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public readonly data$: Observable<{
    counter: number,
  }>;

  public readonly start$: EventEmitter<void> = new EventEmitter();
  public readonly stop$: EventEmitter<void> = new EventEmitter();

  constructor() {
    this.data$ = interval(500).pipe(
      buffer(this.start$),
      first(data => !!data),
      repeatWhen(() => this.stop$),
      switchMap(data => interval(500).pipe(takeUntil(this.stop$))),
      map(counter => counter + 1),
      startWith(0),
      map(counter => ({ counter })),
    );
  }
}

import { Component } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-value-input',

  template: `
    <tui-input class="input" [ngModel]="value">
      Введите значение
      <input tuiTextfield />
    </tui-input>
  `,
})
export class ValueInputComponent {
  get value(): string {
    return this.ngControl.value;
  }

  constructor(private readonly ngControl: NgControl) {}
}

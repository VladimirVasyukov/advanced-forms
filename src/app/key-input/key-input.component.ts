import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-key-input',

  template: `
    <tui-input
      class="input"
      [(ngModel)]="value"
      (input)="onInputValueChange($event)"
    >
      Введите ключ
      <input tuiTextfield />
    </tui-input>
  `,

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KeyInputComponent),
      multi: true,
    },
  ],
})
export class KeyInputComponent implements ControlValueAccessor {
  value: string | undefined;

  private onChange!: (value: string) => void;
  private onTouched!: (value: string) => void;

  onInputValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLInputElement;
    const value = targetDivElement.value;
    this.onChange(value);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}

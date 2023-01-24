import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TuiInputModule } from '@taiga-ui/kit';

import { AppComponent } from './app.component';
import { KeyInputComponent } from './key-input/key-input.component';
import { ValueInputComponent } from './value-input/value-input.component';

@NgModule({
  declarations: [AppComponent, KeyInputComponent, ValueInputComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, TuiInputModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

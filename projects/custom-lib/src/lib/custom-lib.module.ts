import { NgModule } from '@angular/core';
import { CustomLibComponent } from './custom-lib.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CustomLibComponent],
  imports: [CommonModule, HttpClientModule ],
  exports: [CustomLibComponent]
})
export class CustomLibModule { }

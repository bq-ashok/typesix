import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazymoduleRoutingModule } from './lazymodule-routing.module';
import { LazyComponentComponent } from './lazy-component/lazy-component.component';

@NgModule({
  declarations: [LazyComponentComponent],
  imports: [
    CommonModule,
    LazymoduleRoutingModule
  ]
})
export class LazymoduleModule { }

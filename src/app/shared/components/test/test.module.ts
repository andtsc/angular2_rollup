import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
import { CommonModule }  from '@angular/common';

import { routing } from './test.routes';

import { TestComponent } from './test.component';

@NgModule({
  imports:      [ RouterModule,
                  CommonModule,
                  routing ],
  declarations: [ TestComponent ]
})

export class TestModule {}

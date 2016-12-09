import { NgModule }      from '@angular/core';
import { HttpModule }    from '@angular/http';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing }       from './app.routes';
import { HomeModule } from './shared/components/home/home.module';
import { TestModule } from './shared/components/test/test.module';

@NgModule({

    imports: [ BrowserModule,
               HttpModule,
               CommonModule,
               FormsModule,
               HomeModule,
               TestModule,
               routing],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}

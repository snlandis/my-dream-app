import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //(1)this was added second

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'; //(2)address of the component

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent //(2)tells angular to find the component because it doesn't auto detect
  ],
  imports: [
    BrowserModule,
    FormsModule //(1)this was added first
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

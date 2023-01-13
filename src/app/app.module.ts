import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { OperandosComponent } from './operandos/operandos.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultadoComponent,
    OperandosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

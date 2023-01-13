import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = "Calculadora Angular!"
  resultadoSum: number;

  verificarResultado(resultado: number){
    this.resultadoSum = resultado;
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-operandos',
  templateUrl: './operandos.component.html',
  styleUrls: ['./operandos.component.css']
})
export class OperandosComponent {

  @Output() mostrarResultado = new EventEmitter<number>();

  SumNum1: number = 0;
  SumNum2: number = 0;

  sumar():void{
    // this.resultado = this.SumNum1 + this.SumNum2;
    let resultado = this.SumNum1 + this.SumNum2;
    this.mostrarResultado.emit(resultado);
  }

}

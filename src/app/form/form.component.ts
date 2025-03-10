import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  peso: number = 0;
  altura: number = 0;
  imc: string = '0';
  imgsrc: string[] = [
    '',
    'abaixo.svg',
    'normal.svg',
    'acima.svg',
    'obesidade_G1.svg',
    'obesidade_G2.svg',
  ];
  indexImg: number = 0;

  alert: any = { type: 'success', message: '' };

  onClickIMC() {
    if (this.altura > 0) {
      const imcValor = this.peso / this.altura ** 2;
      this.imc = imcValor.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      this.indexImg = this.classificar(imcValor);
    } else {
      this.imc = '0';
      this.indexImg = 0;
    }
  }

  classificar(num: number): number {
    if (num < 18.5) {
      this.alert = { type: 'primary ', message: 'Esta abaixo do peso' };
      return 1;
    }
    if (num < 25) {
      this.alert = { type: 'success ', message: 'Esta no peso normal' };
      return 2;
    }
    if (num < 30) {
      this.alert = { type: 'primary ', message: 'Esta acima do peso' };
      return 3;
    }
    if (num < 40) {
      this.alert = { type: 'warning  ', message: 'Esta com obesidade' };
      return 4;
    }
    this.alert = { type: 'danger  ', message: 'Esta com obesidade grave' };
    return 5;
  }
}

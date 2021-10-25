import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: 'numeros.component.html',
  styleUrls: ['numeros.component.css']
})
export class NumerosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ventasNetas:number = 2675345.6775;
  porcentaje:number = 0.4856;

}

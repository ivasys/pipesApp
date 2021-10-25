import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//i18nSelect
  nombre:string = "Susana";
  genero:string = "femenino";
  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }


//i18nPlural
  clientes:string[]=["maria","pedro","hernando","eduardo","fernando"];
  clientesMapa = {
    '=0':'no tenemos clientes esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos dos clientes esperando.',
    'other':'tenemos # clientes esperando.'
  }


  cambiarCliente(){
    this.nombre = "Miguel";
    this.genero = "masculino";
  }


  borrarCliente(){
    this.clientes.pop();
  }



  //KeyValue Pipe
  persona = {
    nombre: 'fernando',
    edad: 35,
    direccion: 'Ottawa, Canadá'
  }


  //JSON Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]


  //Async Pipe
  miObservable = interval(1000); // 1,2,3,4,5

  valorPromesa = new Promise( (resolve,reject) => {

      setTimeout( ()=>{resolve('fin de la promesa')} , 3500);

  });

}

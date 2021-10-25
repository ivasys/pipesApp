import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];


  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label : "iconos de angular",
        icon : 'pi pi-desktop',
        items : [
          {
            label: 'textos y fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'numeros',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
          },  {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
          }
        ]
      },
      {
        label : "pipes personalizados",
        icon : 'pi pi-cog'
      }
      
    ];
  }

}

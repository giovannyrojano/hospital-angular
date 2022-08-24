import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../models/MenuItem.interface';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  menu: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {


    this.menu = [
      {
        displayName: 'Inicio',
        iconName: 'home',
        route: '/',
      },
      {
        displayName: 'Pacientes',
        iconName: 'group',
        children: [
          {
            displayName: 'Gestionar Pacientes',
            iconName: 'assignment',
            route: '/pacient',
            /*children: [
              {
                displayName: 'Subir documentos',
                iconName: 'cloud_upload',
                route: '/rrhh_Subirdocumentos',
              },
              {
                displayName: 'ver documentos',
                iconName: 'assignment',
                route: '/infoTec',
              },
            ],*/
          }
          ,

        ],
      },

      {
        displayName: 'Cuenta',
        iconName: 'account_box',
        route: '/actor',
      },
    ];


  }

}

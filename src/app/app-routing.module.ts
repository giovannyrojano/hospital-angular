import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard.component';

import { PacientComponent } from './modules/pacient/pacient.component';

import { DefaultComponent } from './layout/default/default.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        // canActivate: [CheckLoginGuard],
      },
      {
        path: 'pacient',
        component: PacientComponent,
        //   canActivate: [CheckLoginGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }

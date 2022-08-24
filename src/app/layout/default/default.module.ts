import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { PacientComponent } from '../../modules/pacient/pacient.component';
import { AddComponent } from '../../modules/pacient/dialog/add/add.component';


import { SharedModule } from '../../shared/shared.module';
//import { PredioComponent } from '../../modules/predio/predio.component';
import { MatModule } from '../../mat/mat.module';
import { EditComponent } from 'src/app/modules/pacient/dialog/edit/edit.component';
import { DeleteComponent } from 'src/app/modules/pacient/dialog/delete/delete.component';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
    declarations: [DefaultComponent, DashboardComponent,PacientComponent,AddComponent,EditComponent,DeleteComponent],
    imports: [CommonModule, RouterModule, SharedModule, MatModule],
    // providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class DefaultModule { }

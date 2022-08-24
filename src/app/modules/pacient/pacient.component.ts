import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup, FormControl, } from '@angular/forms';
import {AddComponent} from './dialog/add/add.component';
import { PacientService } from 'src/app/services/pacient/pacient.service';
import { Pacient } from 'src/app/models/pacient.interface';
import { DataResponse } from 'src/app/models/dataresponse.interface';
import { MatTableDataSource } from '@angular/material/table';
import { EditComponent } from './dialog/edit/edit.component';
import { DeleteComponent } from './dialog/delete/delete.component';

@Component({
  selector: 'app-pacient',
  templateUrl: './pacient.component.html',
  styleUrls: ['./pacient.component.scss']
})


export class PacientComponent implements OnInit {

  showProgressBar = false;

  Form: FormGroup;
  pacients:Pacient[]=[];
  dataSource = null;

  constructor(  public dialogService: MatDialog  ,private _pacient:PacientService) { }

  ngOnInit(): void {
    this.get();
  }


  get(){
    
  this.showProgressBar = true;
    this._pacient.getPacient()
    .subscribe((res: DataResponse) => {

      if(!res.error){
        this.pacients=res.data;
        this.dataSource=  this.pacients;

      }else{
      
    }
    console.log(res);
    
    this.showProgressBar = false;
    });
  }



  create(){
    this.openAddDialog(); 
  }
  openAddDialog() {
    const dialogRef = this.dialogService.open(AddComponent, {
      data: {pacient: {} }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.get();
       // this.refreshTable();
      } 
    });
  }




  update(element:Pacient){
    console.log("updating...",element);
    const dialogRef = this.dialogService.open(EditComponent, {
      data:  element 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        
        this.get();
       // this.refreshTable();
      }
    });

  }
  delete(element){

    console.log("deleting...",element);


    const dialogRef = this.dialogService.open(DeleteComponent, {
      data:  element 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        
        this.get();
       // this.refreshTable();
      }
    });
  }

  displayedColumns: string[] = ['dni','name','lastname','operacion'];
 // dataSource = ELEMENT_DATA;

}



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

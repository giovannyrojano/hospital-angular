import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataResponse } from 'src/app/models/dataresponse.interface';
import { Pacient } from 'src/app/models/pacient.interface';
import { PacientService } from 'src/app/services/pacient/pacient.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {


  Form: FormGroup;
  
  constructor(public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pacient,private fb: FormBuilder,private _pacient:PacientService ) { }

  ngOnInit(): void {
  
    this.Form = this.fb.group(this.data);

    this.Form.setValue(this.data);

  }


  confirmDelete(){
    this.delete();
  }


  delete(){
    this._pacient.deletePacient(this.Form.value).subscribe((res:DataResponse)=>{
      if(!res.error){
      }else{
    
      }
      console.log(res);
      this.dialogRef.close();
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

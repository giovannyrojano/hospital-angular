import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataResponse } from 'src/app/models/dataresponse.interface';
import { Pacient } from 'src/app/models/pacient.interface';
import { PacientService } from 'src/app/services/pacient/pacient.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  Form: FormGroup;
  
  constructor(public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pacient,private fb: FormBuilder,private _pacient:PacientService ) { }

  ngOnInit(): void {


    this.Form = this.fb.group(this.data);

    this.Form.setValue(this.data);
  }

  confirmEdit(){
this._pacient.updatePacient(this.Form.value).subscribe((res:DataResponse)=>{
  if(!res.error){
  }else{

  }
  console.log(res);
  this.dialogRef.close();
} );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}

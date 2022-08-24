import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pacient } from 'src/app/models/pacient.interface';
import { FormsModule } from '@angular/forms';
import { PacientService } from 'src/app/services/pacient/pacient.service';
import { DataResponse } from 'src/app/models/dataresponse.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  Form: FormGroup;
  constructor( public dialogRef: MatDialogRef<AddComponent>  , 
      @Inject(MAT_DIALOG_DATA) public data: Pacient, private fb: FormBuilder,private _pacient:PacientService) { }



  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]); 

  ngOnInit(): void {


    this.Form = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      dni: ['', [Validators.required]],
   });
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(){
    this.save();
  }

  /*public confirmAdd(): void {
   console.log(this.Form.value);
   
   this.save();
    // this.dataService.addIssue(this.data);
  }*/



save(){

  this._pacient.savePacient(this.Form.value)
  .subscribe((res:DataResponse)=>{
    if(!res.error){

    }
   console.log(res);
  });
}

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

}

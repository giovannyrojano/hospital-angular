import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { Pacient} from '../../models/pacient.interface';
import { DataResponse} from '../../models/dataresponse.interface';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
  

@Injectable({
  providedIn: 'root'
})
export class PacientService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8'
  });

  constructor(private http: HttpClient, private router: Router) { }

  getPacient(): Observable<DataResponse> {
    return this.http.get<DataResponse>(`${environment.API_URL}pacient`,{headers:this.headers});
  }
  savePacient(pacient:Pacient): Observable<DataResponse> {
    return this.http.post<DataResponse>(`${environment.API_URL}pacient`,pacient,{headers:this.headers});
  }
  updatePacient(pacient:Pacient): Observable<DataResponse> {
    return this.http.put<DataResponse>(`${environment.API_URL}pacient/${pacient.id}`,pacient,{headers:this.headers});
  }
  deletePacient(pacient:Pacient): Observable<DataResponse> {
    return this.http.delete<DataResponse>(`${environment.API_URL}pacient/${pacient.id}`,{headers:this.headers});
  }

}

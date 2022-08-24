import { Pacient } from "./pacient.interface";

export interface DataResponse {
    error:boolean
    msg: string;
    data: Pacient[];
  }
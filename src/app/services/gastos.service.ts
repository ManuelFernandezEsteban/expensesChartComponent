import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gasto } from '../interfaces/gasto.interface';

const url = environment.url;
@Injectable({
  providedIn: 'root'
})
export class GastosService {

  constructor(private http:HttpClient) { }

  getGastos():Observable<Gasto[]>{
    return this.http.get<Gasto[]>(url);
  }
}

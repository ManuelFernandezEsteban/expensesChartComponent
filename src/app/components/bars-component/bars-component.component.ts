import { Component, OnInit } from '@angular/core';
import { GastosService } from '../../services/gastos.service';
import { Gasto } from '../../interfaces/gasto.interface';

@Component({
  selector: 'app-bars-component',
  templateUrl: './bars-component.component.html',
  styleUrls: ['./bars-component.component.sass']
})
export class BarsComponentComponent implements OnInit {

  gastos:Gasto[]=[];

  constructor(private gastosServices:GastosService) { }

  ngOnInit(): void {
    this.gastosServices.getGastos().subscribe(resp=>{
      this.gastos=resp;      
    })
  }

}

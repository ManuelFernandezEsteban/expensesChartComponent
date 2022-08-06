import { Component, ElementRef, Input, OnInit, ViewChild,Renderer2, Directive } from '@angular/core';
import { Gasto } from '../../interfaces/gasto.interface';
import { environment } from 'src/environments/environment';
import { IfStmt } from '@angular/compiler';

const alturaBar=environment.altoBar;
@Component({
  selector: 'app-bar-component',
  templateUrl: './bar-component.component.html',
  styleUrls: ['./bar-component.component.sass']
})

export class BarComponentComponent implements OnInit {

  @ViewChild('barra') divBar?:ElementRef;
  @Input('indice')indice:number=0;
  @Input()gasto:Gasto={
    day:'',
    amount:0
  };

  amountMostrado:boolean=true;

  constructor(private rendered:Renderer2) { 
    
  }

  ngOnInit(): void {

    setTimeout(() => {
      const pixelsAltoBar:number = Math.ceil(this.gasto.amount*alturaBar);  
      const bar = document.querySelector!(`#bar${this.indice}`);      
      this.rendered.setStyle(bar,'height',`${pixelsAltoBar}px`);
    }, 100);
    
  } 
  mostrarAmount():string  {
    
    if (this.amountMostrado){      
      return 'no-visible';
    }else{      
      return ''
    }
    
  }
    
  mostrar(){
    this.amountMostrado=!this.amountMostrado;
    
  }
  mostrarActive():string{
    if(this.esDiaSemana()){
      return ''
    }
    if(!this.amountMostrado){
      return 'active';

    }    
    else{
      return ''
    } 
  }

  diaSemana():string{
    
    if (this.esDiaSemana()){
      return 'dia-semana'
    }else{
      return ''
    }
  }

  esDiaSemana():boolean{
    const diasSemana= ['sun','mon','tue','wed','thu','fri','sat']
    const dia = new Date().getDay();
    if (this.gasto.day===diasSemana[dia]){
      return true
    }else{
      return false
    }
  }


}

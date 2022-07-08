import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogoService} from "../catalogo.service";

@Component({
  selector: 'app-prod2',
  templateUrl: './prod2.component.html',
  styleUrls: ['./prod2.component.css']
})
export class Prod2Component implements OnInit {
  lista2:any=[];
  id='';
  constructor(private route:Router,private Ruta:ActivatedRoute,private catalogoService:CatalogoService){
  }

  ngOnInit(): void {
    this.id = this.Ruta.snapshot.paramMap.get('id')+'';
    this.lista2= this.catalogoService.getprod();
    this.lista2= this.lista2[ parseInt(this.id)-1 ];
  }


}

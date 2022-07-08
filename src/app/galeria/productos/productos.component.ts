import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogoService} from "../catalogo.service";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  lista1:any=[];
  id='';
  buscar='';
  ban:boolean = false;
  constructor(private route:Router,private Ruta:ActivatedRoute,private catalogoService:CatalogoService){
  }
  ngOnInit(): void {
    this.id = this.Ruta.snapshot.paramMap.get('id')+'';
    this.lista1=this.catalogoService.getprod();
    console.log(this.lista1);
  }

  Product1(id:string) {
    this.route.navigate(['/Productos/Prod',id]);
  }

  acticon(){
    if (this.ban==false){
      this.ban=true;
    }else{
      this.ban=false;
    }
  }

  buscador(){
      this.route.navigate(['/Productos/Prod',this.buscar]);
  }
}

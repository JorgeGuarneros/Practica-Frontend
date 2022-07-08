import { Component, OnInit } from '@angular/core';
import {CatalogoService} from "../catalogo.service";
import {Datos} from "../../interface/Datos";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  lista:Datos[]=[];
  constructor(private catalogoservice:CatalogoService) { }

  ngOnInit(): void {
    this.ejecutaconsulta();
  }
  ejecutaconsulta(){
    this.catalogoservice.consultabd().subscribe(
      res=>{console.log(res)
        this.lista=res;}
    )
  }
}

import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  URL= 'http://localhost:4000/login/usuario';
  lista:any[]=[
    {
    id:1,
    nombre:'manzana',precio:'50',imagen:'assets/img/manzana.jpg',
    },
    {
      id:2,
      nombre:'pera',precio:'80',imagen:'/assets/img/pera.jpg',
    },
    {
      id:3,
      nombre:'uva',precio:'60',imagen:'/assets/img/uva.jpg',
    },
    {
      id:4,
      nombre:'melon',precio:'90',imagen:'/assets/img/melon.jpg',
    },
    {
      id:5,
      nombre:'platano',precio:'40',imagen:'/assets/img/platano.jpg',
    },
  ]
  constructor(private http:HttpClient) {
    console.log("Servicio funcionando")
  }
  consultabd():Observable<any>{
    return this.http.get(this.URL);
  }
  getprod(){
    return this.lista;
  }

}


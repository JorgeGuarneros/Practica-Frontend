import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-guardar-producto',
  templateUrl: './guardar-producto.component.html',
  styleUrls: ['./guardar-producto.component.css']
})
export class GuardarProductoComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {
  }
  datos:FormGroup=new FormGroup({
    nombre : new FormControl("1",[Validators.email]),
    password : new FormControl("2",[Validators.required])
  })
}

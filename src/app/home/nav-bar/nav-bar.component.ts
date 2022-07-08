import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
   bandera:boolean = false;
   bandera2:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  mostrar() {
    return this.bandera= true;
  }

  buscar(){
    if (this.bandera2==false){
      this.bandera2=true;
    }else{
      this.bandera2=false;
    }
  }
}

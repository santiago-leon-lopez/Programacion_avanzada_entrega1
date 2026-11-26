import { Component, OnInit } from '@angular/core';
import { DataInfo } from 'src/app/data/card.data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  titulo: string = "Bienvenido al Dashboard";

  data:any = DataInfo;
  constructor() { }

  ngOnInit(): void {
  }

  recibeDelHijo(infoData:any){
    console.log(infoData)
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {


  @Input() infoBerdo:any;

  @Output() enviaAlOnce =new EventEmitter()

  constructor(){
    
  }
  ngOnInit(): void {
    console.log(this.infoBerdo)
  }

  enviarInfo(info:any){
    this.enviaAlOnce.emit(info)
  }

}

import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import { Server } from '../models/server.model';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  @Input() server:Server
  @Output('insideEvent') delete=new EventEmitter<Server>()
  constructor() { }

  ngOnInit() {
  }

  deleteServer(){
    this.delete.emit(this.server)
  }

}

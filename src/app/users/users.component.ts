import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Server } from '../servers/models/server.model';
import { ServersService } from '../services/servers.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  serverName
  serverStatus
  serverId
  userId
  firstName
  lastName
  constructor(public serversService:ServersService) { }

  ngOnInit() {
  }

  addServer(){
    let newServer = new Server()
    newServer.name=this.serverName
    newServer.status=this.serverStatus
    newServer.id=this.serverId
    newServer.owner={userId:'',firstname:'',lastname:''}
    newServer.owner.userId=this.userId
    newServer.owner.firstname=this.firstName
    newServer.owner.lastname=this.lastName
    this.serversService.addServer(newServer)
  }

  changeMessage(message:NgForm){
    this.serversService.sharedVariable=message.value.messageText
    console.log(this.serversService.sharedVariable)
  }
  getMessage(){
    return this.serversService.sharedVariable
  }

}

import { Component, OnInit } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Server } from './models/server.model';
import { map } from 'rxjs/operators';
import { ServersService } from '../services/servers.service';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  date:Date
  tempid:string
  isCreated:boolean=false
  servers:Server[]=[]
  temp:any
  message=null
  messageText:string
  constructor(public serversService:ServersService) {
    
   }

  ngOnInit() {
    this.getServers()
    this.date=new Date()
    this.message = this.serversService.sharedVariable
    console.log(this.message)
    
  }

  onCreateServer(){
    let newServer={name:this.temp,status:"inactive",id:this.tempid}
    this.servers.push(newServer)
    console.log(this.servers)
    this.serversService.addServer(newServer)
    this.isCreated=true
    this.temp=""
    this.tempid=""    
  }
  getColor(server){
    if(server.status=='active'){
      return 'green'
    }
    else{
      return 'red'
    }
  }
  delete(event:Server){
    // to delete it form the array
    let index = this.servers.indexOf(event)
    this.servers.splice(index,1)
    /* this.db.collection('servers').doc(event.docid).delete() */
    this.serversService.delServer(event)    
  }

  getServers(){
/*     this.db.collection('servers').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const docid = a.payload.doc.id;
        return { docid, ...data };

      }))
    ).subscribe(result=>{
      this.servers=result
      console.log(this.servers)
    }) */
    this.serversService.getServers().subscribe(data=>{
      this.servers=data
    })

  }

  changeMessage(){
    this.serversService.sharedVariable=this.messageText
    console.log(this.serversService.sharedVariable)
  }
  getMessage(){
    return this.serversService.sharedVariable
  }
}

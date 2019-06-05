import { Injectable } from '@angular/core';
import { Server } from '../servers/models/server.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  sharedVariable="Start the Message Passing"

  constructor(public db:AngularFirestore) { }

  addServer(server:Server){
    this.db.collection('servers').add(Object.assign({},server))
  }

  getServers(){
    return this.db.collection('servers').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const docid = a.payload.doc.id;
        return { docid, ...data };
        // data={ name:'some name',status:'inactive } id={id:'doc id from firebase'} 
        // result will be {id:'doc id',name:'some name' , status:'inactive'}
      }))
    )
  }

  delServer(server:Server){
    this.db.collection('servers').doc(server.docid).delete()
  }

}

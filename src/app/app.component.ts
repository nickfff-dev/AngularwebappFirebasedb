import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  title = 'propertyManage';
  
  constructor(private  store: AngularFirestore){
    const users = this.store.collection('users').valueChanges();
    const owners = this.store.collection('owners').snapshotChanges();
    // owners.subscribe(function (res) {
    //     res.forEach(item => {
    //       store.collection('owners').doc(item.payload.doc.id).set({id: item.payload.doc.id}, { merge: true });
    //       console.log(item.payload.doc.data());
    //     });
    //   })
    // owners.subscribe(console.log);

    

    
  }
  
}


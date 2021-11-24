import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  title = 'propertyManage';
  
  constructor(private  store: AngularFirestore){
    const users = this.store.collection('users').valueChanges();
    users.subscribe(console.log);

    
  }
  
}


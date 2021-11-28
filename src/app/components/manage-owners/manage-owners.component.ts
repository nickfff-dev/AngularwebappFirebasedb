import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Data } from '@angular/router';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';






@Component({
  selector: 'app-manage-owners',
  templateUrl: './manage-owners.component.html',
  styleUrls: ['./manage-owners.component.css']
})
export class ManageOwnersComponent implements OnInit {
  arr: any;
  employeeList: any;
  

  constructor(private  store: AngularFirestore){
    const owners = this.store.collection('owners').valueChanges();

    }
  
  model = { id: "", fname: "", lname: "", email: ""};
  ngOnInit(): void {
  
  // this.onDsss();
  //  this.onFss();
  
  }
  
  addOwner(model: any) {
    this.store.collection('owners').add(model);
    };

  removeOwner(id: string) {
    this.store.collection('owners').doc(id).delete();
    };
  editOwner(id: string) {
  this.store.collection('owners').doc(id).update(this.model);
}

ownerSubmit() {
  this.addOwner(this.model);
  this.model.fname = "";
  this.model.lname = "";
  this.model.email = "";
  
}

clickHandle(){
  this.onFss();
}
ownerEdit() {
  this.editOwner(this.model.lname);
  this.editOwner(this.model.email);
  
}
  onDsss() {
    const owners = this.store.collection('owners').snapshotChanges();
    owners.subscribe( (res) => {
      res.forEach(item => {
       this.store.collection('owners').doc(item.payload.doc.id).set({id: item.payload.doc.id}, { merge: true });
        console.log(item.payload.doc.data());
      });
    })
  }
 onFss(){

  const owners = this.store.collection('owners').snapshotChanges();
  owners.subscribe( (res) => {
    this.arr = [];
    res.forEach(item => {
      this.arr.push(item.payload.doc.data());
      console.log(this.arr);

    
   })} 

   
   )
   return this.arr;
 } 
 onDelete(id: string) {
  this.store.collection('owners').doc(id).delete();}
  onEdit(id: string) {
    this.store.collection('owners').doc(id).update(this.model);
  }
  onClick() {
 this.onFss();

  }



}

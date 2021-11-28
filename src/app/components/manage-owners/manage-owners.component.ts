import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Data } from '@angular/router';
import { map } from 'rxjs/operators';
import { Owner } from './Owner'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-manage-owners',
  templateUrl: './manage-owners.component.html',
  styleUrls: ['./manage-owners.component.css']
})
export class ManageOwnersComponent implements OnInit {

  empList: Array<Owner> = [];
  arr: unknown[] = []
  constructor(private  store: AngularFirestore){
    const owners = this.store.collection('owners').valueChanges();
    
  
  }
  
  model = { fname: "", lname: "", email: ""};
  ngOnInit(): void {
  // this.onDsss();
  const owners = this.store.collection('owners').snapshotChanges();
  owners.subscribe( (res) => {
    res.forEach(item => {
      this.arr.push(item.payload.doc.data());
      // console.log(item.payload.doc.data());

    
   });
   console.log(this.arr);
  } 
)
  
  }
  
  addOwner(model: any) {
    this.store.collection('owners').add(model);
    };

  removeOwner(model: string | undefined) {
    this.store.collection('owners').doc(model).delete();
    };
//   editOwner(model: string | undefined) {
//   this.store.collection('owners').doc(model).update(this.model);
// }

ownerSubmit() {
  this.addOwner(this.model);
  this.model.fname = "";
  this.model.lname = "";
  this.model.email = "";
  
}
// ownerDelete() {
//   this.removeOwner(this.model.fname);
//   this.removeOwner(this.model.lname);
//   this.removeOwner(this.model.email);
//   this.model.fname = "";
//   this.model.lname = "";
//   this.model.email = "";
// }
// ownerEdit() {
//   this.editOwner(this.model.fname);
//   this.editOwner(this.model.lname);
//   this.editOwner(this.model.email);
//   this.model.fname = "";
//   this.model.lname = "";
//   this.model.email = "";
// }
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
    res.forEach(item => {
      this.arr.push(item.payload.doc.data());
      console.log(item.payload.doc.data());

    
   })} 

   
   )
   return this.arr;
 } 




}

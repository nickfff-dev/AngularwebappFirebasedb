import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-manage-owners',
  templateUrl: './manage-owners.component.html',
  styleUrls: ['./manage-owners.component.css']
})
export class ManageOwnersComponent implements OnInit {

  constructor(private  store: AngularFirestore){
    const owners = this.store.collection('owners');
  
  }
  model = { fname: "", lname: "", email: ""};
  ngOnInit(): void {
  this.store.collection("owners")



  }
  addOwner(model: unknown) {
    this.store.collection('owners').add(model);
    };

  removeOwner(model: string | undefined) {
    this.store.collection('owners').doc(`model`).delete();
    };
  editOwner(model: string | undefined) {
  this.store.collection('owners').doc(model).update(this.model);
}

ownerSubmit() {
  this.addOwner(this.model);
  this.model.fname = "";
  this.model.lname = "";
  this.model.email = "";
}
ownerDelete() {
  this.removeOwner(this.model.fname);
  this.removeOwner(this.model.lname);
  this.removeOwner(this.model.email);
  this.model.fname = "";
  this.model.lname = "";
  this.model.email = "";
}
ownerEdit() {
  this.editOwner(this.model.fname);
  this.editOwner(this.model.lname);
  this.editOwner(this.model.email);
  this.model.fname = "";
  this.model.lname = "";
  this.model.email = "";
}

}

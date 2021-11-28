import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-manage-owners',
  templateUrl: './manage-owners.component.html',
  styleUrls: ['./manage-owners.component.css']
})
export class ManageOwnersComponent implements OnInit {

  constructor(private  store: AngularFirestore){
    const owners = this.store.collection('owners').valueChanges();
    
  
  }
  model = { fname: "", lname: "", email: ""};
  ngOnInit(): void {
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
  this.store.collection('owners').snapshotChanges().pipe(map(actions => actions.map(a => {
    const data = a.payload.doc.id;
    console.log(data)})));
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

}

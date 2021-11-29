import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-manage-owners',
  templateUrl: './manage-owners.component.html',
  styleUrls: ['./manage-owners.component.css']
})
export class ManageOwnersComponent implements OnInit {
  arr: any;
 


  constructor(private store: AngularFirestore) { }

  model = { id: "", fname: "", lname: "", email: "" };
  ngOnInit(): void {
  }
  

addOwner(model: unknown) {
  this.store.collection('owners').add(model);
  const owners = this.store.collection('owners').snapshotChanges();
  owners.subscribe(res => {
    res.forEach(item => {
      return this.store.collection('owners').doc(item.payload.doc.id).set({ id: item.payload.doc.id }, { merge: true });
    });
  })

};

deleteOwner(id: string) {
  this.store.collection('owners').doc(id).delete();
};
editOwner(id: string) {
  this.store.collection('owners').doc(id).update(this.model);
}

ownerSubmit() {
  this.addOwner(this.model);

}

clickHandle() {
  this.onFss();
}
onFss() {
  const owners = this.store.collection('owners').snapshotChanges();
  owners.subscribe((res) => {
    this.arr = [];
    res.forEach(item => {
      this.arr.push(item.payload.doc.data());
      // console.log(this.arr);


    })
  }


  )
  return this.arr;
}
onClickHandler() {
  return this.onFss();

}





}

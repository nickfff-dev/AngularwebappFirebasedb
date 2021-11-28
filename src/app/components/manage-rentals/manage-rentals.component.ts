import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-rentals',
  templateUrl: './manage-rentals.component.html',
  styleUrls: ['./manage-rentals.component.css']
})
export class ManageRentalsComponent implements OnInit {

  arr: any;
  rentals: any;
  

  constructor(private  store: AngularFirestore) { 

  }
  model = {id: "", fname: "", lname: "", email: "", rental: "" };
  ngOnInit(): void {
  }

addRental(model: any) {
    this.store.collection('rentals').add(model);
    };
searchRental(){};
deleteRentals(id: string){
  this.store.collection('rentals').doc(id).delete();
};
assignRental(){};
deleteRental(id: string){
  this.store.collection('rentals').doc(id).delete();
};
editRental(id: string){
  this.store.collection('rentals').doc(id).update(this.model);
};
onClickfun(){
  this.onRentalview();
};

onRentalview(){

  const owners = this.store.collection('rentals').snapshotChanges();
  owners.subscribe( (res) => {
    this.arr = [];
    res.forEach(item => {
      this.arr.push(item.payload.doc.data());
      console.log(this.arr);

    
   })} 

   
   )
   return this.arr;
 }
}

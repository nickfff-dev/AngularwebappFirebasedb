import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-rentals',
  templateUrl: './manage-rentals.component.html',
  styleUrls: ['./manage-rentals.component.css']
})
export class ManageRentalsComponent implements OnInit {


  rentals: any;
  

  constructor(private  store: AngularFirestore) { }
  model = {id: "", fname: "", lname: "", email: "", rental: "" };
  
  ngOnInit(): void {
  }

addRental(model: unknown) {
    this.store.collection('rentals').add(model);
    const rentals = this.store.collection('rentals').snapshotChanges();
    rentals.subscribe( res => {
      res.forEach(item => {
        return this.store.collection('rentals').doc(item.payload.doc.id).set({id: item.payload.doc.id}, { merge: true });
      });
    })

    };
    onSubmit(){
      this.addRental(this.model);
    }
searchRental(){};
deleteRentals(id: string){
  this.store.collection('rentals').doc(id).delete();
};
assignRental(){};
deleteRental(id: string){
  this.store.collection('rentals').doc(id).delete();
};
editRental(id: any){
  this.store.collection('rentals').doc(id).update(this.model);
};
onClickfun(){
 return this.onRentalview();
};

onRentalview(){
  const rentals = this.store.collection('rentals').snapshotChanges();
  rentals.subscribe( res => {
    this.rentals = [];
    res.forEach(item => {
      
      this.rentals.push(item.payload.doc.data());

    
   })} 
    
   
   )
   return this.rentals;
 }
}

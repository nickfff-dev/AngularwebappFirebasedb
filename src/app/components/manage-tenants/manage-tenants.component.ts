import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-manage-tenants',
  templateUrl: './manage-tenants.component.html',
  styleUrls: ['./manage-tenants.component.css']
})
export class ManageTenantsComponent implements OnInit {

  tenants: any;

  constructor(private  store: AngularFirestore) { }

  model = { id: "", fname: "", lname: "", email: "", tenant: "" }

  ngOnInit(): void {
  }

  addTenant() {
    this.store.collection('tenants').add(this.model);
  
  }
 editTenant(id: string) {
    this.store.collection('tenants').doc(id).update(this.model);

 }

 

  removeTenant(id: string) {
    this.store.collection('tenants').doc(id).delete();
  }

  clickHandle(){
    this.onTenantView();

  }


  onTenantView(){

    const owners = this.store.collection('rentals').snapshotChanges();
    owners.subscribe( (res) => {
      this.tenants = [];
      res.forEach(item => {
        this.tenants.push(item.payload.doc.data());
        console.log(this.tenants);
  
      
     })} 
  
     
     )
     return this.tenants;
   }
}

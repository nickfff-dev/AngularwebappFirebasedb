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
  
  addTenant(model: unknown) {
    this.store.collection('tenants').add(model);
    const tenantz = this.store.collection('tenants').snapshotChanges();
    tenantz.subscribe( res => {
      res.forEach(item => {
        return this.store.collection('tenants').doc(item.payload.doc.id).set({id: item.payload.doc.id}, { merge: true });
      });
    })
  
  }
  onSubmit(){
    this.addTenant(this.model)
  }

  
editTenant(id: string) {
    this.store.collection('tenants').doc(id).update(this.model);

 }

 

removeTenant(id: string) {
    this.store.collection('tenants').doc(id).delete();
  }

clickHandle(){
    return this.onTenantView();

  }


  onTenantView(){

    const tenantz = this.store.collection('tenants').snapshotChanges();
    tenantz.subscribe( (res) => {
      this.tenants = [];
      res.forEach(item => {
        this.tenants.push(item.payload.doc.data())
  
      
     })} 
  
     
     )
     return this.tenants;
   }
}

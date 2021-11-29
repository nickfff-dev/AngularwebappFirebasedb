import { Component, NgModule, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';





@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {
  uzers: any;
  constructor(private  store: AngularFirestore){
    const users = this.store.collection('users').valueChanges();
  
  }
  model = {id: "", fname: "", lname: "", password: "", userName: ""};
  msg = '';
  

  ngOnInit(): void {
  }
  
  clickEvent(){
    this.msg='User Created!';
    return this.msg;
  }
  onClickHandler(){
    this.onClickView();
  }
  addUser(model: any) {
    this.store.collection('users').add(model);
    };
  userSubmit() {
    this.addUser(this.model);
    const users = this.store.collection('users').snapshotChanges();
    users.subscribe( res => {
          res.forEach(item => {
            return this.store.collection('users').doc(item.payload.doc.id).set({id: item.payload.doc.id}, { merge: true });
          });
        })
    }
    onClickView(){

      const users = this.store.collection('users').snapshotChanges();
      users.subscribe( (res) => {
        this.uzers = [];
        res.forEach(item => {
          this.uzers.push(item.payload.doc.data());
          // console.log(this.uzers);
    
        
       })} 
    
       
       )
       return this.uzers;
     } 
  
  removeUser(id: string){
    this.store.collection('users').doc(id).delete();
  }
  userEdit(id: any){
    this.store.collection('users').doc(id).update(this.model);
  }


}

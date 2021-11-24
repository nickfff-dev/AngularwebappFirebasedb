import { Component, NgModule, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';





@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {
  constructor(private  store: AngularFirestore){
    const users = this.store.collection('users').valueChanges();
  
  }
  model = { fname: "", lname: "", password: "", userName: ""};
  msg = '';
  

  ngOnInit(): void {
  }
  
  clickEvent(){
    this.msg='User Created!';
    return this.msg;
  }
  addUser(model: unknown) {
    this.store.collection('users').add(model);
    };
  userSubmit() {
    this.addUser(this.model);
    this.model.fname = "";
    this.model.userName = ""
    this.model.lname = "";
    this.model.password = "";
    }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // TODO
  // Marie to write a method that takes the inputs and goes to data table to look up if it is there
  // display errors on form if user doesn't enter a password
  // style the page so it doesn't look like shit

}
